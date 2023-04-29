
type Consultation = {
 patientId: string;
 physicianId: string;
 consultationId: string;
 symptoms: string;
 access?: ({ patientId, consultationId }:any) => void;
 // other consultation properties
};

const Prescriptions = ({ symptoms, access, consultationId, patientId }:Consultation):JSX.Element=>{
 const handleGrantAccess = () => {
  access && access({ patientId, consultationId })
 }
 return(
  <div className="cookie-card">
   <span className="title">Patient</span>
   <p className="description"> {symptoms}</p>
   <div className="actions">
    <button className="accept" onClick={handleGrantAccess}>
     Prescribe
    </button>
   </div>
  </div>
 )
}

export default Prescriptions;