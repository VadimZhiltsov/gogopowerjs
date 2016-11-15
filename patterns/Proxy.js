class Math {
	add(x, y) {
		return x + y;
	}

	sub(x, y) {
		return x - y;
	}
}

class MathProxy {
	constructor() {
		var math = new RMath();	
	}
	
	add(...args) {
		console.log('perform any additional logic with add', ...args)
		//perform any additional logic)
		return this.math.add(...args);
	};
	sub(...args) {
		return this.math.sub(...args);
	};
}
