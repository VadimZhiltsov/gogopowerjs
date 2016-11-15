class Singleton {
	static instance;

	constructor() {
		if (this.constructor.__instance) {
			return this.constructor.__instance;
		} else {
			return this;
		}
	}
}

console.assert( new Singleton() === new Singleton() ); // true