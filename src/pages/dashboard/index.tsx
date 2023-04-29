import Private from "@/components/shared/layouts/Private";
import { Row } from "antd";
import UserCard, { Doctor } from "@/components/cards/User";
import { useGetConsultationsQuery } from "@/services/endpoints/opertaions.endpoint";
import Treatments, {Treatment} from "@/components/cards/Treatment"
import PatientWrapper from "@/components/wrappers/PatientWrapper";

const Dashboard = (): JSX.Element => {
  const { data: consultations, isLoading: consultationLoading, isSuccess: consultationSuccess } = useGetConsultationsQuery()
  return (
    <Private>
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            {consultations &&
              consultations?.response.payload?.map((consultation: Treatment) => (
                <Treatments key={consultation.id} id={consultation.id} date={consultation.date} symptoms={consultation.symptoms}/>
              ))}
          </Row>
        </div>
      </div>
    </Private>
  )
}

export default Dashboard
