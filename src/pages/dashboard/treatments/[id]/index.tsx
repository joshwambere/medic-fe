import Treatment from "@/components/cards/Treatment"
import Private from "@/components/shared/layouts/Private"
import { useGetConsultationMutation, useGetConsultationsQuery } from "@/services/endpoints/opertaions.endpoint"
import { Form, Row } from "antd"
import Treatments from ".."
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Prescriptions from "@/components/cards/Prescriptions"
import Prescribe from "@/components/forms/Prescribe"
import jwt from 'jsonwebtoken';


const Consultation = (): JSX.Element => {


 const { data: consultations, isLoading: consultationLoading, isSuccess: consultationSuccess } = useGetConsultationsQuery()
 
 const { id } = useRouter().query;
 const [getConsultation, { isLoading: consLoading }] = useGetConsultationMutation()
 const [consultationId, setConsultationId] = useState([]);
 const getResult = () => {
  getConsultation({ id:id }).unwrap().then((res: any) => {
   setConsultationId(res.response.payload)
  })
 }

 useEffect(() => {
  getResult()
 },[0])

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [doctorId, setDoctorId] = useState("");
 const [consId, setConsId] = useState("");
 const localToken = localStorage.getItem('_galileo_tkn');
 const decodedToken: any = jwt.decode(localToken!);
 const userId = decodedToken?.jti;

 const showModal = ({ patientId,consultationId}:any) => {
  setDoctorId(patientId);
  setConsId(consultationId)
  setIsModalOpen(true);
 };

 const handleOk = () => {
  setIsModalOpen(false);
 };

 const handleCancel = () => {
  setIsModalOpen(false);
 };

 const onFinish = (values: any) => {

 }
 return (
  <Private>
   <div className="medic_pages_wrapper">
    {
     isModalOpen && <Form name="Login"
      onFinish={onFinish}
      style={{

      }}
      className="sendConsultationForm"
      onClick={handleCancel}
     >
     
     
      <Prescribe pharmacistId={userId} patientId={doctorId} consultationId={consId} />
      
     </Form>
    }
    <div style={{ padding: '1rem', width: '100%' }}>
     <Row>
      {
       consultationId?.map((consultation: any) => (<Prescriptions key={consultation.id} consultationId={consultation.id} symptoms={consultation.symptoms} patientId={consultation.patientId} physicianId={consultation.physicianId} access={showModal} />))
      }
     </Row>
    </div>
   </div>
  </Private>
 )
}

export default Consultation

