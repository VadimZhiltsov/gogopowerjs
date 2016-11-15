// "интерфейс" Strategy

class MessangerStrategy() {
	showMessage(message) {}
};


// реализации Strategy

class AlertMessanger extends MessangerStrategy {
	showMessage(message) {
		alert(message);
	}
}

class NotificationMessanger extends MessangerStrategy {
	showMessage(message) {
		new Notification(message);
	}
}

class DOMMessanger extends MessangerStrategy {
	showMessage(message) {
		$(document).append(`<div id="qwe">${message}</div>`);

		setTimeout(() => {
			$('#qwe').remove()
		}, 1000);
	}
}

class LogMessager extends MessangerStrategy {
	showMessage(message) {
		console.log(message)
	}
}


class Chat {
	constructor(messanger) {
		this.messanger = messanger
	}
	//... a log of logic
	sendMessage(message) {
		this.messanger.showMessage(message);
	};
}


// Использование

var alertingChat = new Chat( new AlertMessanger() );
var notificationChat = new Chat( new NotificationMessanger() );
var DOMChat = new Chat( new DOMMessanger() );
var logChat = new Chat( new LogMessager() );

alertingChat.sendMessage('message');
notificationChat.sendMessage('message');
DOMChat.sendMessage('message');
logChat.sendMessage('message');

