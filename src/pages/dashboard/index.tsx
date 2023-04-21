import Private from "@/components/shared/layouts/Private";
import { Row } from "antd";

const Dashboard = ():JSX.Element =>{
  return (
    <Private>
      <div className="medic_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row>
            <h1>Hello</h1>
          </Row>
        </div>
      </div>
    </Private>
  )
}

export default Dashboard
