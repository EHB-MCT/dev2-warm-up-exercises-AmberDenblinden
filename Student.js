export default class Student {
	constructor(name, age, score) {
		this._name = name;
		this._age = age;
		this._score = score;
	}

	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	}

	set score(score) {
		this._score = score;
	}
}
