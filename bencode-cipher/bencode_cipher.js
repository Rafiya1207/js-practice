function encodeNumberData(numberData) {
	return 'i' + numberData + 'e';
}

function encodeStringData(stringData) {
	return stringData.length + ':' + stringData;
}

function type(data) {
	return Array.isArray(data) ? 'array' : typeof (data);
}

function encodeList(list, index, bencodedData) {
	if (index === list.length) {
		return bencodedData + 'e';
	}

	bencodedData += encode(list[index]);

	return encodeList(list, index + 1, bencodedData);
}

function encode(data) {
	const dataType = type(data);

	switch (dataType) {
		case 'number': return encodeNumberData(data);
		case 'string': return encodeStringData(data);
		case 'array': return encodeList(data, 0, 'l');
	}
}

function composeMsg(description, data, expected, received) {
	const spaces = ' '.repeat(5);
	const dashes = '-'.repeat(30);
	const isPassed = expected === received;
	const symbol = isPassed ? '✅' : '❌';

	let message = `${symbol} | ${description}\n`;

	if (!isPassed) {
		message += `${dashes}\n`;
		message += `${spaces}data: ${data}\n`;
		message += `${spaces}expected: ${expected}\n`;
		message += `${spaces}received: ${received}\n`;
		message += `${dashes}\n`;
	}
	return message;
}

function testEncode(description, data, expected) {
	const received = encode(data);
	console.log(composeMsg(description, data, expected, received));
}

function testAllEncode() {
	testEncode('data type is number', 123, 'i123e');
	testEncode('data is negative number', -42, 'i-42e');
	testEncode('data is zero', 0, 'i0e');
	testEncode('data is a word', "hello", "5:hello");
	testEncode('data is empty string', "", "0:");
	testEncode('data is text', "hello world", "11:hello world");
	testEncode('special charcters', "special!@#$chars", "16:special!@#$chars");
	testEncode('list', ["apple", 123], "l5:applei123ee");
	testEncode('nested list', ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
	testEncode('empty list', [], "le");
	testEncode('list has empty string', [0, "", ["test"]], "li0e0:l4:testee");
	testEncode('items are numbers, strings, list', ["", 0, []], "l0:i0elee");
	testEncode('deeply nested list', ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testAll() {
	testAllEncode();
}

testAll();