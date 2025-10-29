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
}

testAll();