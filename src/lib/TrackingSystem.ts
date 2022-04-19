// Feature 
// 1.) Searching By Name
// 2.) Searching By ID

import Patient, {Gender} from './Patient';
const Timeline = require('../../data/timeline.json');

let patientList: Patient[] = [];

class TrackingSystem
{
	private serialID: number;

	constructor(id: number)
	{	
		this.serialID = id;
	}

	getPatient(patient: Patient)
	{
		patientList.push(patient);
	}

	displayPatientList()
	{
		console.log(patientList);
	}

	trackByID(searchID: number)
	{
		const data = Timeline[searchID - 1];
		const result = data.timeline;
		console.log(result);
	}

	trackByName()
	{
		
	}
}

const mintra = new TrackingSystem(12113);
const madman = new Patient(16, "Madman", 19, Gender.MALE, "12/03/2022", 43);
const madwoman = new Patient(18, "Madwoman", 19, Gender.FEMALE, "12/03/2022", 43);

// Implementation.
mintra.displayPatientList();

mintra.getPatient(madman);
mintra.displayPatientList();

mintra.getPatient(madwoman);
mintra.displayPatientList(); 
