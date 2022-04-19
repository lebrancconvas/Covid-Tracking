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

	addPatient(patient: Patient)
	{
		patientList.push(patient);
	}

	displayPatientList()
	{
		console.log(patientList);
	}

	trackByID(searchID: number)
	{
		let isFind: boolean = false;

		patientList.map((_, index) => 
		{
			if(searchID === patientList[index].getID())
			{
				isFind = true;
			}
		});

		if(isFind)
		{
			console.log(Timeline[searchID - 1].timeline);
		}
		else
		{
			console.log("Cannot Find the patient, Please try again.");
		}
	}

	trackByName()
	{
		
	}
}

