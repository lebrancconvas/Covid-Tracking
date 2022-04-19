import Patient, {Gender} from './lib/Patient';
import TrackingSystem from './lib/TrackingSystem';

const miami = new TrackingSystem(31208);

const pat01 = new Patient(1, "Garret Boo", 28, Gender.MALE, "21/05/2021", 12);
const pat02 = new Patient(2, "John Woo", 35, Gender.MALE, "12/05/2021", 1);


miami.addPatient(pat01);
miami.addPatient(pat02);

miami.displayPatientList();

miami.trackByID(1);
miami.trackByName("John Woo");
