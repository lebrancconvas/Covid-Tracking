const Timeline = require("../../data/timeline.json");

export enum Gender
{
	MALE = "Male",
	FEMALE = "Female",
	NON_BINARY = "Non Binary",
	OTHER = "Other"
}

interface Activity
{
	date: string,
	place: string[]
}

class Patient
{
	private id: number;
	private name: string;
	private age: number;
	private gender: Gender;
	private date: string;
	private senderid: number;

	constructor(id: number, name: string, age: number, gender: Gender, date: string, senderid: number)
	{
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.date = date;
		this.senderid = senderid;
	}

	getID()
	{
		return this.id;
	}

	getName()
	{
		return this.name;
	}

	displayPatientStatus()
	{
		console.log("-- PATIENT STATUS --");
		console.log(`ID: ${this.id}\nName: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nDeclared Date: ${this.date}\nRecieved From ID: ${this.senderid}\n`);
	}

	displayPatientTimeLine()
	{
		console.log(Timeline[this.id - 1].timeline);
	}
}

export default Patient;  
