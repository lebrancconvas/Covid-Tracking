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

	trackByName(searchName: string)
	{
		let isFind: boolean = false;
		let indexTrack: number = 0;

		patientList.map((_, index) => 
		{
			if(searchName.toUpperCase() === patientList[index].getName().toUpperCase())
			{
				isFind = true;
				indexTrack = patientList[index].getID() - 1;
			}
		});

		if(isFind)
		{
			console.log(Timeline[indexTrack].timeline);
		}
		else
		{
			console.log("Cannot Find the patient, Please try again.");
		}
	}
}

export default TrackingSystem; 