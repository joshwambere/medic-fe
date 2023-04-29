import Private from "@/components/shared/layouts/Private";
import { Form, Row } from "antd";
import Patient from "@/components/cards/Patient";
import { useGetPatientsQuery } from "@/services/endpoints/opertaions.endpoint";
import jwt from 'jsonwebtoken';
import { useState } from "react";
import Diagnose from "@/components/forms/Diagnose";

type Patient = {
  id: string;
  name: string;
  userName: string;
  email: string;
  phone: string;
  gender: string;
  role: string;
  age: number;
  permissions: string[];
};

const Treatments = (): JSX.Element => {
  const { data: patients, isLoading: loading, isSuccess: success } = useGetPatientsQuery();
  const localToken = localStorage.getItem('_galileo_tkn');
  const decodedToken: any = jwt.decode(localToken!);
  const userId = decodedToken?.jti;
  // Filter the patients based on permission array matching the id from the token
  const filteredPatients = patients?.response.payload?.filter((patient: Patient) =>
    patient.permissions.includes(userId)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  


  const showModal = (id: string) => {
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
            <Diagnose id={userId} patientId={doctorId} />
          </Form>
        }
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            {filteredPatients &&
              filteredPatients.map((patient: Patient) => (
                <Patient 
                  key={patient.id}
                  
                  name={patient.name}
                  id={patient.id}
                  access={showModal}
                  
                />
              ))}
          </Row>
        </div>
      </div>
    </Private>
  );
};

export default Treatments;
