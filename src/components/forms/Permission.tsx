import { grantAccessRequest } from "@/shared/types/user.types";
import { Button } from "antd";
import { useRef } from "react";
import { SuccessMessage } from "../shared/messages/SuccessMessage";
import { useGrantAccessMutation } from "@/services/endpoints/opertaions.endpoint";
import { ErrorMessage } from "@/components/shared/messages/ErrorMessage";

type Permission = {
 id: string;
 symptoms: string;
}
const Permisssion = ({ id }:Permission): JSX.Element => {

 const symptonsRef = useRef<HTMLTextAreaElement>(null);

 const [grantPermission, { isLoading: isLoading }] = useGrantAccessMutation()

 const grantAccess = ({ id, symptoms }: grantAccessRequest) => {
  grantPermission({ id, symptoms }).unwrap().then((res: any) => {
   SuccessMessage(res.response.message)
  }).catch((e:any) => {
   ErrorMessage(e.data ? e.data.message : 'Error while granting access');
  });
 }

 const handleClick = (e:any) => {
  e.stopPropagation()
 }


 const onFinish = (event:any) => {
  event.preventDefault();
  grantAccess({ id, symptoms: symptonsRef.current?.value || "" });
  
 };
 return (
  <div className="input-container" onClick={handleClick}>
   <textarea ref={symptonsRef} required placeholder="Symptoms" />
   <Button className="invite-btn" onClick={onFinish} >
     Send
   </Button>
  </div>
 )
}

export default Permisssion