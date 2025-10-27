function encodeNumberData(numberData) {
	return 'i' + numberData + 'e';
}

function encodeStringData(stringData) {
	return stringData.length + ':' + stringData;
}

function encode(data) {
	const type = typeof (data);

	switch (type) {
		case 'number': return encodeNumberData(data);
		case 'string': return encodeStringData(data);
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
		message += `${spaces}receivec: ${received}\n`;
		message += `${dashes}\n`;
	}
	return message;
}

function testEncode(description, data, expected) {
	const received = encode(data);
	console.log(composeMsg(description, data, expected, received));
}

function testAll() {
	testEncode('data type is number', 123, 'i123e');
	testEncode('data is negative number', -42, 'i-42e');
	testEncode('data is zero', 0, 'i0e');
	testEncode('data is a word', "hello", "5:hello");
	testEncode('data is empty string', "", "0:");
	testEncode('data is text', "hello world", "11:hello world");
	testEncode('special charcters', "special!@#$chars", "16:special!@#$chars");
}

testAll();