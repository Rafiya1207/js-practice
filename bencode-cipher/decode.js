function removeFirstSubString(string, substring) {
	return string.slice(substring.length);
}

function splitNumberInstruction(string) {
	const end = string.indexOf('e') + 1;
	return string.slice(0, end);
}

function splitStringInstruction(string) {
	const colonIndex = string.indexOf(':');
	const length = parseInt(string.slice(0, colonIndex));
	return string.slice(0, length + colonIndex + 1);
}

function decodeToNumber(bencodedData) {
	const data = bencodedData.slice(1, bencodedData.length - 1);
	return parseInt(data);
}

function decodeToString(bencodedData) {
	const colonIndex = bencodedData.indexOf(':');
	const stringLength = parseInt(bencodedData.slice(0, colonIndex));
	const endIndex = stringLength + 3;
	return bencodedData.slice(colonIndex + 1, endIndex);
}

function decodeList(data, list, listString) {
	if (data[0] === 'e') {
		return [list, listString];
	}

	const firstItem = getDataType(data);
	const restString = removeFirstSubString(data, firstItem);

	listString += firstItem;
	list.push(decode(firstItem));
	return decodeList(restString, list, listString);
}

function getDataType(data) {
	switch (data[0]) {
		case 'l': return 'l' + decodeList(data.slice(1), [], '')[1] + 'e';
		case 'i': return splitNumberInstruction(data);
		case 'e': return 'e';
		default: return splitStringInstruction(data);
	}
}

function decode(data) {
	switch (data[0]) {
		case 'l': return decodeList(data.slice(1), [], '')[0];
		case 'i': return decodeToNumber(data);
		default: return decodeToString(data);
	}
}

function isArray(x) {
	return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	}

	for (let index = 0; index < array1.length; index++) {
		if (!areDeepEqual(array1[index], array2[index])) {
			return false;
		}
	}

	return true;
}

function areDeepEqual(array1, array2) {
	if (typeof array1 !== typeof array2) {
		return false;
	}

	if (isArray(array1) && isArray(array2)) {
		return areArraysEqual(array1, array2);
	}

	return array1 === array2;
}

function composeMsg(description, data, expected, received) {
	const spaces = ' '.repeat(5);
	const dashes = '-'.repeat(30);
	const isPassed = areDeepEqual(expected, received);
	const symbol = isPassed ? '✅' : '❌';

	let message = symbol + ' | ' + description + '\n';

	if (!isPassed) {
		message += dashes + '\n';
		message += spaces + 'data: ' + data + '\n';
		message += spaces + 'expected: ' + expected + '\n';
		message += spaces + 'received: ' + received + '\n';
		message += dashes + '\n';
	}
	return message;
}

function testDecode(description, bencodedData, expected) {
	const received = decode(bencodedData);

	console.log(composeMsg(description, bencodedData, expected, received));
}

function testAllDecode() {
	testDecode('number', "i123e", 123);
	testDecode('negative number', "i-67e", -67);
	testDecode('zero', "i0e", 0);
	testDecode('word', "5:hello", "hello");
	testDecode('empty string', "0:", "");
	testDecode('text', "11:hello world", "hello world");
	testDecode('special chars', "16:special!@#$chars", "special!@#$chars");
	testDecode('list with one number', "li23ee", [23]);
	testDecode('list with two numbers', "li23ei90ee", [23, 90]);
	testDecode('list with string', "l5:helloe", ['hello']);
	testDecode('list has numbers and strings', "li23e5:helloe", [23, 'hello']);
	testDecode('nested list', "l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]]);
	testDecode('deep nest list', "l3:appi-89elli-590067e6:wordlei893421eelei-12222223eel19:apple wordle wordleei0el0:leee", ['app', -89, [[-590067, 'wordle', 893421], [], -12222223], ['apple wordle wordle'], 0, ['', []]]);
}

function testAll() {
	testAllDecode();
}

testAll();