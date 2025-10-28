function getIntegerInstruction(string) {
	const end = string.indexOf('e') + 1;
	return string.slice(0, end);
}

function decodeToNumber(bencodedData) {
	const data = bencodedData.slice(1, bencodedData.length - 1);
	return parseInt(data);
}

function getListItems(listString) {
	let index = 1;
	let isEnd = true;
	let listItems = '';

	while (index <= listString.length) {
		let currentItem = listString[index];

		if (currentItem === 'e' && isEnd) {
			return listItems;
		}
		if (currentItem === 'e' && !isEnd) {
			isEnd = true;
		}
		if (currentItem === 'i') {
			isEnd = false;
		}
		if (currentItem === 'l') {
			currentItem = getListInstruction(listString.slice(index));
			isEnd = true;
			index += currentItem.length - 1;
		}
		listItems += currentItem;
		index++;
	}
	return listItems;
}

function getListInstruction(listString) {
	return 'l' + getListItems(listString) + 'e';
}

function getFirstInstruction(listItems) {
	if (listItems[0] === 'i') {
		return getIntegerInstruction(listItems);
	}
	if (listItems[0] === 'l') {
		return getListInstruction(listItems);
	}
}

function decodeList(listItems) {
	const list = [];
	let itemIndex = 0;
	let restItems = listItems;

	while (restItems !== '') {
		const instruction = getFirstInstruction(restItems);
		const item = decode(instruction);
		restItems = restItems.slice(instruction.length);
		list.push(item);
		itemIndex += instruction.length;
	}

	return list;
}

function decode(data) {
	if (data.startsWith('l') && data.endsWith('e')) {
		return decodeList(data.slice(1, data.length - 1));
	}
	if (data.startsWith('i') && data.endsWith('e')) {
		return decodeToNumber(data);
	}
}
