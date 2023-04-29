import { routes } from "@/config/router.config";
import { changeRoute } from "@/shared/utils/helpers/routesHandler";
import { Form } from "antd";

type Consultation = {
 patientId: string;
 symptoms: string;
 diagnosis: string;
 // other consultation properties
};

type Diagnosis ={
 id:string;
 name:string;
 role:string;
 access?: (id:string) => void;
}

const Patient = ({name, id, access, role}:Diagnosis):JSX.Element=>{
 const handleGrantAccess = () => {
  access && access(id)
 }
 return (
  <>
  {
       role === 'PHYSICIAN' ? <div className="card__">
         <div className="header">
           <span className="icon">
             <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
             </svg>
           </span>
           <p className="alert">{name}</p>
         </div>

         <p className="message">
           placeholder text
         </p>

         <div className="actions">
           <button className="read" onClick={handleGrantAccess}  >
               Diagnose
             </button>) 


         </div>
       </div> : <div className="card__" onClick={() => changeRoute({ pathname: routes.consultation.url, query: { id: id } })}>
         <div className="header">
           <span className="icon">
             <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
             </svg>
           </span>
           <p className="alert">{name}</p>
         </div>

         <p className="message">
           placeholder text
         </p>

         <div className="actions">
           {
             role === "PHYISICIAN" ? (<button className="read" onClick={handleGrantAccess}  >
               Diagnose
             </button>) : null
           }


         </div>
       </div>
  }
  </>
 )
}

export default Patient;