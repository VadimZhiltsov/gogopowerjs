/*
       Read more: http://thejacklawson.com/Mediator.js/
*/

class Mediator {
	subscribe() {}
	publish() {}
	unsubscribe() {}
}


mediator = new Mediator();


mediator.subscribe('event', logger);
mediator.publish('event', 1)
mediator.publish('event', 2)
mediator.unsubscribe('event', logger)


function logger(...args) {
	console.log(...args);
}
