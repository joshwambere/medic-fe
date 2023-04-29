import { grantAccessRequest } from "@/shared/types/user.types";
import { Button } from "antd";
import { useRef } from "react";
import { SuccessMessage } from "../shared/messages/SuccessMessage";
import { useConsultationMutation } from "@/services/endpoints/opertaions.endpoint";
import { ErrorMessage } from "@/components/shared/messages/ErrorMessage";

type Permission = {
 id: string;
 patientId: string;
}
const Diagnose = ({ id , patientId}: Permission): JSX.Element => {
 const symptonsRef = useRef<HTMLTextAreaElement>(null);

 const [consultation, { isLoading: isLoading }] = useConsultationMutation()

 const grantAccess = ({ patientId, id, diagnosis }: any) => {
  console.log(patientId, id)
  console.log(diagnosis)
  consultation({ patientId, physicianId:id, diagnosis }).unwrap().then((res: any) => {
   SuccessMessage(res.response.message)
  }).catch((e: any) => {
   ErrorMessage(e.data ? e.data.message : 'Error while granting access');
  });
 }

 const handleClick = (e: any) => {
  e.stopPropagation()
 }


 const onFinish = (event: any) => {
  event.preventDefault();
  const diagnosis = symptonsRef.current?.value || "";
  grantAccess({ patientId, id, diagnosis });

 };
 return (
  <div className="input-container" onClick={handleClick}>
   <textarea ref={symptonsRef} required placeholder="Diagnosis" />
   <Button className="invite-btn" onClick={onFinish} >
    Send
   </Button>
  </div>
 )
}

export default Diagnose