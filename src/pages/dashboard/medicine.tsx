import { useState } from "react";
import { Form, Row, Table, Button, Modal, Input } from "antd";
import { useCreateMedecineMutation, useGetMedicineQuery } from "@/services/endpoints/opertaions.endpoint";
import Private from "@/components/shared/layouts/Private";

interface Medicine {
 medName: string;
 medPrice: number;
 medExpData: string;
}

const Medcine = (): JSX.Element => {
 const { data: medicines } = useGetMedicineQuery();
 const [createMedecineMutation] = useCreateMedecineMutation();
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [form] = Form.useForm();

 const showModal = () => {
  setIsModalVisible(true);
 };

 const handleCancel = () => {
  setIsModalVisible(false);
 };

 const handleFormSubmit = (values: Medicine) => {
  createMedecineMutation({ medPrice: parseInt(values.medPrice), medName: values.medName, medExpData: values.medExpData})
   .unwrap()
   .then((res: any) => {
    console.log("Medicine created:", res);
    setIsModalVisible(false);
    form.resetFields();
   })
   .catch((error: any) => {
    console.error("Error creating medicine:", error);
   });
 };

 const columns = [
  {
   title: "Medicine Name",
   dataIndex: "medName",
   key: "medName",
  },
  {
   title: "Price",
   dataIndex: "medPrice",
   key: "medPrice",
  },
  {
   title: "Expiry Date",
   dataIndex: "medExpData",
   key: "medExpData",
  },
 ];

 return (
  <Private>
   <div className="medic_pages_wrapper">
    <div style={{ padding: "1rem", width: "100%" }}>
     <Row>
      <Button type="primary" danger onClick={showModal}>
       Add Medicine
      </Button>
     </Row>
     <Row style={{ marginTop: "1rem" }}>
      {medicines?.response.payload && <Table columns={columns} dataSource={medicines.response.payload} />}
     </Row>
    </div>
   </div>
   <Modal title="Add Medicine" visible={isModalVisible} onCancel={handleCancel} footer={null}>
    <Form form={form} onFinish={handleFormSubmit}>
     <Form.Item
      name="medName"
      label="Medicine Name"
      rules={[{ required: true, message: "Please enter medicine name" }]}
     >
      <Input />
     </Form.Item>
     <Form.Item
      name="medPrice"
      label="Price"
     >
      <Input type="number" />
     </Form.Item>
     <Form.Item
      name="medExpData"
      label="Expiry Date"
      rules={[{ required: true, message: "Please enter expiry date" }]}
     >
      <Input />
     </Form.Item>
     <Form.Item>
      <Button type="primary" danger htmlType="submit">
       Add
      </Button>
     </Form.Item>
    </Form>
   </Modal>
  </Private>
 );
};

export default Medcine;
