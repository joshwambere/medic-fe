import { grantAccessRequest } from "@/shared/types/user.types";
import { Button, Select } from "antd";
import { useRef, useState } from "react";
import { SuccessMessage } from "../shared/messages/SuccessMessage";
import { usePrescribeMutation, useGetMedicineQuery, useGetConsultationMutation } from "@/services/endpoints/opertaions.endpoint";
import { ErrorMessage } from "@/components/shared/messages/ErrorMessage";
import Patient from "../cards/Patient";
import { useLoginMutation } from "@/services/endpoints/auth.endpoint";

const { Option } = Select;

type Permission = {
  pharmacistId: any;
 patientId: string;
consultationId: string;
};

const Prescribe = ({ pharmacistId, patientId, consultationId }: Permission): JSX.Element => {
 const { data: medcines } = useGetMedicineQuery()
  console.log(patientId)
  
 

 const symptonsRef = useRef<HTMLTextAreaElement>(null);
 const [selectedValue, setSelectedValue] = useState<string>("");

  const [prescribe, { isLoading }] = usePrescribeMutation();

  const grantAccess = ({ patientId, pharmacistId, medName }: any) => {

    prescribe({ patientId, pharmacistId, medName, consultationId })
   .unwrap()
   .then((res: any) => {
    SuccessMessage(res.response.message);
   })
   .catch((e: any) => {
    ErrorMessage(e.data ? e.data.message : "Error while granting access");
   });
 };

 const handleSelectChange = (value: string) => {
  setSelectedValue(value);
 };

 const handleClick = (e: any) => {
  e.stopPropagation();
 };

 const onFinish = (event: any) => {
  event.preventDefault();
  const diagnosis = symptonsRef.current?.value || "";
   grantAccess({ patientId, pharmacistId, medName: selectedValue, consultationId });
 };

 return (
  <div className="input-container" onClick={handleClick}>
   <Select
    defaultValue=""
    onChange={handleSelectChange}
    style={{ width: 200 }}
    placeholder="Select a value"
   >
    {
     medcines?.response.payload&& medcines?.response.payload?.map((medicine: any) => (
       <Option key={medicine.medName} value={medicine.medName}>{medicine.medName}</Option>
     )) 
    }
   </Select>
   <Button className="invite-btn" onClick={onFinish} disabled={isLoading}>
    Send
   </Button>
  </div>
 );
};

export default Prescribe;


