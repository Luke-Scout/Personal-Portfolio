function generateNewRandomNumber(num) {
	return Math.floor(Math.random() * num);
}

let messagesObjects = {
	shouldDo: [
		"Mow the lawn",
		"Wash your dog",
		"Do the dishes",
		"Mop the floors",
		"Dust the house",
		"Get a haircut",
		"Shave your dog's butt"
	],
	haveDone: ["Making breakfast", "Meal prepping", "Grocery shopping"],
	wantToDo: ["go on a cruise", "go to Rome", "go to Japan"],
};

let personalMessage = [];
for (let i = 0; i < Object.keys(messagesObjects).length; i++) {
	let messageIndex = generateNewRandomNumber(messagesObjects[Object.keys(messagesObjects)[i]].length);
	let messageItem = Object.keys(messagesObjects)[i];
	switch (messageItem) {
		case "shouldDo":
			personalMessage.push(
				`You need to ${messagesObjects[messageItem][messageIndex].toLowerCase()} soon.`
			);
			break;
		case "haveDone":
			personalMessage.push(
				`Congrats you finished ${messagesObjects[messageItem][messageIndex].toLowerCase()}!`
			);
			break;
		case "wantToDo":
			personalMessage.push(
				`You really need to take a break you should ${messagesObjects[messageItem][messageIndex]}.`
			);
			break;
		default:
			personalMessage.push(
				"Either something went wrong, or there is not enough information."
			);
			break;
	}
}

function formatMessage() {
	let formattedMessage = personalMessage.join(" ");
	console.log(formattedMessage);
}
formatMessage();