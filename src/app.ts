// Code Something. 

enum Gender
{
	MALE,
	FEMALE,
	NON_BINARY,
	OTHER
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

	showStatus()
	{
		console.log("-- PATIENT STATUS --");
		console.log(`
			Name: ${this.name}\n
			Age: ${this.age}\n
			Gender: ${this.gender}\n
			Declared Date: ${this.date}\n
			Recieved From ID: ${this.senderid}\n
		`)
	}
}

const patient01 = new Patient(1, "Robert Dowson", 45, Gender.MALE, "23/10/2021", 5);