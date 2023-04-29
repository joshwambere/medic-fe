export type Doctor = {
 id: string;
 name: string;
 userName: string;
 email: string;
 gender: string;
 age: number;
 phone: string;
 role: string;
 permissions: any[];
 access?: (id:string) => void;
}



const UserCard = ({ name,role, age , access, id}:Doctor):JSX.Element=>{
 const handleGrantAccess = ()=>{
  access && access(id)
 }
 return(
  <div className="card">
   <div className="card-border-top">
   </div>
   <div className="img">
   </div>
   <span> {name}</span>
   <p className="job"> {role}</p>
   {
    role === "PHARMACIST" ? <p className="age"> {age} years old</p> : null
   }
   <button onClick={handleGrantAccess}> Grant Access
   </button>
  </div>
 )
}

export default UserCard;