class Telephone {
	constructor() {
		this.phoneNumbers = []
		this.observers = []
	}

	addPhoneNumber(number) {
		this.phoneNumbers.push(number)
	}

	removePhoneNumber(numberToRemove) {
		this.phoneNumbers = this.phoneNumbers.filter(number => number != numberToRemove)
	}

	dailPhoneNumber(fnToDail) {
		const findNumber = this.phoneNumbers.find(number => number === fnToDail.phoneNumber)

		if (findNumber) {
			console.log(`Now Dailing ${findNumber}`)
			this.notifyObservers(fnToDail)
		} else {
			console.log(`Only Numbers That Are Added Can Be Dailed`)
		}
	}

	addObserver(fn) {
		this.observers.push(fn)
	}

	removeObserver(fnToRemove) {
		this.observers = this.observers.filter(fn => fn.phoneNumber != fnToRemove.phoneNumber)
	}

	notifyObservers(callingFn) {
		this.observers.filter(fn => fn.phoneNumber != callingFn.phoneNumber).forEach(fn => fn.notify(callingFn.phoneNumber))
	}
}

class Observer {
	constructor(phoneNumber) {
		this.phoneNumber = phoneNumber
	}

	notify(number) {
		console.log(number)
	}
}

const telephone = new Telephone()
const observer1 = new Observer(`2347023232`)
const observer2 = new Observer(`23470232320`)

telephone.addObserver(observer1)
telephone.addObserver(observer2)

telephone.addPhoneNumber(observer1.phoneNumber)
telephone.addPhoneNumber(observer2.phoneNumber)

telephone.dailPhoneNumber(observer2)
