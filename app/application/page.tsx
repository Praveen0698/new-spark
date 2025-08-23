"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Signature from "@/components/Signature";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import JoinForm from "@/components/Joining";
import axios from "axios";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { baseUrl } from "@/constant/baseurl";
import Image from "next/image";
import headerimg from "@/public/headerimg.png";
import Undertaking from "@/components/Undertaking";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Mainfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams?.get("token");

  const [formData, setFormData] = useState({
    photo: "",
    signOne: "",
    signTwo: "",
    officeEmployeeCode: "",
    officeDepartment: "",
    officeOffice: "",
    name: "",
    dob: "",
    sex: "",
    fatherName: "",
    motherName: "",
    nationality: "",
    state: "",
    caste: "",
    religion: "",
    casteCategory: "",
    physicallyHandicapped: "",
    exServicemen: "",
    panNumber: "",
    voterId: "",
    rationCardNo: "",
    identificationOne: "",
    identificationTwo: "",
    identificationThree: "",
    height: "",
    martialStatus: "",
    spouseName: "",
    spouseReligion: "",
    spouseCaste: "",
    interReligionCaste: "",
    spouseEmployeed: "",
    spouseEmployeedIn: "",
    addressProof: "",
    panCardFile: "",
    presentHouseName: "",
    presentStreetName: "",
    presentPlace: "",
    presentPin: "",
    presentState: "",
    presentDistrict: "",
    presentTaluk: "",
    presentVillage: "",
    presentPhoneNo: "",
    presentHomeTown: "",
    presentEmail: "",
    permanentHouseName: "",
    permanentStreetName: "",
    permanentPlace: "",
    permanentPin: "",
    permanentState: "",
    permanentDistrict: "",
    permanentTaluk: "",
    permanentVillage: "",
    permanentPhoneNo: "",
    permanentHomeTown: "",
    permanentEmail: "",
    source: "",
    generalRecruitment: "",
    method: "",
    scaleOfPay: "",
    adviceMemo: "",
    adviceMemoDate: "",
    districtRecruitment: "",
    ifDistrictRecruitment: "",
    serialNoAdviceMemo: "",
    entryCategory: "",
    appointmentOrder: "",
    appointmentOrderDate: "",
    education: [
      {
        courseTitle: "",
        subject: "",
        universityBoard: "",
        institution: "",
        cgpaPercentage: "",
        regNoYear: "",
        uploadOne: "",
      },
    ],
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolder: "",
    declarationStation: "",
    declarationDate: "",
    declarationName: "",
    declarationSignature: "",
  });

  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      const tokenData = jwtDecode<any>(accessToken);
      setBgColor(tokenData?.colorPicker || "");
      setText(tokenData?.companyName || "");
      setAddress(tokenData?.address || "");
      setTextColor(tokenData?.colorText || "");
      setFile(tokenData?.file || "");
    } else {
      router.push("/");
    }
  }, [accessToken]);

  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(3);

  const isFormValid =
    formData.name.length > 0 &&
    formData.dob.length > 0 &&
    formData.sex.length > 0 &&
    formData.fatherName.length > 0 &&
    formData.motherName.length > 0 &&
    formData.nationality.length > 0
      ? false
      : true;

  const handleSave = () => {
    console.log(isFormValid);
    if (isFormValid) {
      alert("Please fill up the form");
    } else {
      setLoading(true);
      setTimeout(() => {
        setOpen(true);
        setLoading(false);
        startRedirectTimer();
      }, 1500);
    }
  };

  const startRedirectTimer = () => {
    let count = 3;
    setTimer(count);
    const interval = setInterval(() => {
      count -= 1;
      setTimer(count);
      if (count <= 0) {
        clearInterval(interval);
        router.push("/");
      }
    }, 1000);
  };

  // const handleSave = async () => {
  //   setLoading(true);
  //   try {
  //     await axios.post(`${baseUrl}/application-form`, formData);
  //     handleOpen();
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className="fullpage" style={{ background: "#fdfdfd" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <Image
            src={headerimg}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="App">
          <Header />
          <Signature formData={formData} setFormData={setFormData} />
          <Personal formData={formData} setFormData={setFormData} />
          <Contact formData={formData} setFormData={setFormData} />
          <Education formData={formData} setFormData={setFormData} />
          <JoinForm />
          <Undertaking formData={formData} setFormData={setFormData} />
          <Footer formData={formData} setFormData={setFormData} />

          <div className="buttons-cont">
            <button
              className="submit-btn"
              onClick={handleSave}
              // disabled={isFormValid}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        {/* <div className="footer" style={{ backgroundColor: bgColor }}>
          <div className="full-col"></div>
          <div
            className="full-color"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{ fontSize: "0.8rem", color: textColor, marginBottom: 0 }}
            >
              {address}
            </p>
          </div>
        </div> */}
        <footer
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: "#00529B",
            color: "white",
            fontSize: "0.75rem",
            textAlign: "center",
            padding: "1rem 0",
          }}
        >
          Copyright © 2025 - All Rights Reserved. Official Website of Bharat
          Dynamics Limited, A Government of India Enterprise, Ministry of
          Defence.
        </footer>
      </div>

      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "450px",
            bgcolor: "#ffffff",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 48, mb: 1 }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}
          >
            Form Submitted Successfully!
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Redirecting to login page in <strong>{timer}</strong> second
            {timer !== 1 ? "s" : ""}...
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Mainfile;
