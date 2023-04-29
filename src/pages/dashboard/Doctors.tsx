import Private from "@/components/shared/layouts/Private";
import { Form, Row, Modal } from "antd";
import UserCard, { Doctor } from "@/components/cards/User";
import { SuccessMessage } from "@/components/shared/messages/SuccessMessage";
import { useGetDoctorsQuery, useGrantAccessMutation } from "@/services/endpoints/opertaions.endpoint";
import { ErrorMessage } from "@/components/shared/messages/ErrorMessage";
import Permisssion from "@/components/forms/Permission";
import { useState } from "react";
import { grantAccessRequest } from "@/shared/types/user.types";

const  Doctors = ():JSX.Element => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const { data: Doctors, isLoading: loading, isSuccess: success } = useGetDoctorsQuery();
  const [grantPermission, { isLoading: isLoading }] = useGrantAccessMutation()


  const showModal = (id:string) => {
    setDoctorId(id);
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
  return(
    <Private>
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          {
            isModalOpen && <Form name="Login"
              onFinish={onFinish}
              style={{

              }}
              className="sendConsultationForm"
              onClick={handleCancel}
              >
              <Permisssion id={doctorId} symptoms="" />
            </Form>
          }
       
          <Row>
            {Doctors &&
              Doctors?.response.payload?.map((doctor: Doctor) => (
                <UserCard key={doctor.id} role={doctor.role} name={doctor.name} id={doctor.id} userName={doctor.gender} email={doctor.email} gender={doctor.gender} age={doctor.age} phone={doctor.phone} permissions={doctor.permissions} access={showModal} />
              ))}
          </Row>
        </div>
      </div>
    </Private>
  )
}

export  default  Doctors