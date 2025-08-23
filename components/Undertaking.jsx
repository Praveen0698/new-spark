import React, { useState } from "react";

const Undertaking = ({ formData, setFormData }) => {
  const [medicalFitnessFile, setMedicalFitnessFile] = useState(null);
  const [suretyBondFile, setSuretyBondFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    border: "none",
    borderBottom: "1px solid black",
    width: "300px",
    margin: "0 5px",
    outline: "none",
  };

  const fileLabelStyle = {
    display: "inline-block",
    padding: "4px 10px",
    color: "#000",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    border: "1px solid black",
  };

  return (
    <section style={{ marginTop: "50px", lineHeight: "1.8" }}>
      <h3 style={{ marginBottom: 20 }}>
        ANNEXURE-E: <span> Undertaking </span>
      </h3>

      <p>
        I, Dr{" "}
        <input
          type="text"
          name="candidateName"
          value={formData.candidateName}
          onChange={handleInputChange}
          style={inputStyle}
        />
        , First year Senior Resident of{" "}
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          style={inputStyle}
        />
        , Course at Jawaharlal Institute of Post-Graduate Medical Education and
        Research, Puducherry, do hereby undertake to complete the said course as
        per the requirements of the Institute. In the event of my leaving the
        studies in mid-stream, I undertake to pay to the Government a sum of Rs.
        50,000/- (Rupees Fifty Thousand only) if I discontinue the course on or
        before 31.01.2017; Rs. 2,00,000/- (Rupees Two Lakhs only) if I
        discontinue the course after 31.01.2017 and within the First Academic
        year and Rs. 5,00,000/- (Rupees Five Lakhs only) if I discontinue the
        course in the Second or Third Academic years. If I leave the course
        after 31<sup>st</sup> January 2017, I understand that I shall be
        debarred to appear for the Entrance Examination for Super Specialty
        Degree Courses of JIPMER for next three sessions.
      </p>

      {/* Uploads Section */}
      <div style={{ marginTop: "30px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="medicalFitnessUpload" style={fileLabelStyle}>
            Upload Medical Fitness Certificate
          </label>
          <input
            id="medicalFitnessUpload"
            type="file"
            accept=".pdf,.jpg,.png"
            style={{ display: "none" }}
            onChange={(e) => setMedicalFitnessFile(e.target.files[0])}
          />
          {medicalFitnessFile && (
            <span style={{ fontStyle: "italic" }}>
              {medicalFitnessFile.name}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="suretyBondUpload" style={fileLabelStyle}>
            Upload Surety Bond
          </label>
          <input
            id="suretyBondUpload"
            type="file"
            accept=".pdf,.jpg,.png"
            style={{ display: "none" }}
            onChange={(e) => setSuretyBondFile(e.target.files[0])}
          />
          {suretyBondFile && (
            <span style={{ fontStyle: "italic" }}>{suretyBondFile.name}</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Undertaking;
