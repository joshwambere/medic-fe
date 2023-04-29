import React, { useState, useEffect } from "react";
import { FRONT_END_URL } from "@/config/constants.config";
import { Button } from "antd";
import jwt from "jsonwebtoken";
import { idText } from "typescript";

interface Medicine {
 id: string;
 patientId: string;
 diagnosis: string;
 medicines: { medName: string }[];
}

const MedicineTable: React.FC = () => {
 const [medicineData, setMedicineData] = useState<Medicine[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string>("");

 const handleDownload = () => {
  const token = localStorage.getItem("_galileo_tkn");
  const decodedToken: any = jwt.decode(token!) ;
  const id = decodedToken?.jti; 

  if (!decodedToken) {
   setError("Invalid token");
   return;
  }

  const requestBody = {
   id: id,
  };

  fetch(`${FRONT_END_URL}/ops/patient/consultation/download`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Authorization: token ? `${token}` : "",
   },
   body: JSON.stringify(requestBody),
  })
   .then((response) => response.blob())
   .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "subscriptions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   })
   .catch((error) => {
    console.error("Error downloading consultation data:", error);
   });
 };

 useEffect(() => {
  handleDownload();
 }, []);

 return (
  <>
   <div className="bg-white h-screen">
    <button onClick={handleDownload}>Download</button>
    <Button type="primary" danger onClick={handleDownload}>
     Download
    </Button>
   </div>
  </>
 );
};

export default MedicineTable;
