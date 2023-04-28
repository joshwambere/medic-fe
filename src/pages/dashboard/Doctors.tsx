import Private from "@/components/shared/layouts/Private";
import { Row } from "antd";
import UserCard from "@/components/cards/User";

const  Doctors = ():JSX.Element => {
  return(
    <Private>
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            <UserCard id={""} name={""} userName={""} email={""} gender={""} age={0} phone={0} role={""} permissions={[]} />
          </Row>
        </div>
      </div>
    </Private>
  )
}

export  default  Doctors