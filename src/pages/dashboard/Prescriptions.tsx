import Private from "@/components/shared/layouts/Private";
import { Row } from "antd";
import UserCard, { Doctor } from "@/components/cards/User";
import { useGetPharmacistsQuery } from "@/services/endpoints/opertaions.endpoint";

const Prescriptions = (): JSX.Element => {
  const { data: Pharmacists, isLoading: loading, isSuccess: success } = useGetPharmacistsQuery();
  return (
    <Private >
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            {Pharmacists &&
              Pharmacists?.response.payload?.map((pharmacist: Doctor) => (
                <UserCard key={pharmacist.id} role={pharmacist.role} name={pharmacist.name} id={pharmacist.id} userName={pharmacist.gender} email={pharmacist.email} gender={pharmacist.gender} age={pharmacist.age} phone={pharmacist.phone} permissions={pharmacist.permissions} />
              ))}
          </Row>
        </div>
      </div>
    </Private >
  )
}

export default Prescriptions