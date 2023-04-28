import Private from "@/components/shared/layouts/Private";
import { Row } from "antd";
import UserCard, { Doctor } from "@/components/cards/User";
import { useGetDoctorsQuery, useGrantAccessMutation } from "@/services/endpoints/opertaions.endpoint";
import { SuccessMessage } from "@/components/shared/messages/SuccessMessage";
import { ErrorMessage } from '@/components/shared/messages/ErrorMessage';

const Dashboard = (): JSX.Element => {
  const { data: Doctors, isLoading: loading, isSuccess: success } = useGetDoctorsQuery();
  const [grantPermission,{isLoading:isLoading}] = useGrantAccessMutation()
  const grantAccess = (id: string) => {
    grantPermission({ id }).unwrap().then((res:any)=>{
        SuccessMessage(res.response.message)
    }).catch(e => {
      ErrorMessage(e.data ? e.data.message : 'Error while granting access');
    });
  }

  return (
    <Private>
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            {Doctors &&
              Doctors?.response.payload?.map((doctor: Doctor) => (
                <UserCard key={doctor.id} role={doctor.role} name={doctor.name} id={doctor.id} userName={doctor.gender} email={doctor.email} gender={doctor.gender} age={doctor.age} phone={doctor.phone} permissions={doctor.permissions} access={grantAccess} />
              ))}
          </Row>
        </div>
      </div>
    </Private>
  )
}

export default Dashboard
