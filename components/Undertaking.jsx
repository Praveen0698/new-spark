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
    width: "150px",
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
        I certify that I have no such physical handicap/disability which would hinder the pursuit
        of studies in the courses in which I am seeking joining in Bharat Dynamics Limited (BDL),
        Corporate Office, Address: Bharat Dynamics Limited, Corporate office, Plot No. 38-39, TSFC
        Building (Near ICICI Towers), Financial District, Gachibowli, Hyderabad, Telangana (State) -
        500032. If at stage it is found that I have a physical handicap/ disability which would hinder
        the pursuit of training in the Bharat Dynamics Limited, Kanchanbagh (PO), Hyderabad, Telangana –
        500058 in which I am seeking Joining then my Joining will be liable to be cancelled. I will
        produce medical fitness certificate from a C.M.O./C.M.S. at the time of my joining the
        institution allotted by BDL-2025 Joining Report.
      </p>

      {/* Uploads and Signature Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Upload buttons */}
        <div style={{ flex: "1 1 45%" }}>
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
              <span
                style={{
                  display: "block",
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
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
              <span
                style={{
                  display: "block",
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
                {suretyBondFile.name}
              </span>
            )}
          </div>
        </div>

        {/* Signature inputs */}
        <div style={{ flex: "1 1 45%", textAlign: "right" }}>
          <p>Signature of the Candidate:</p>
          <input type="text" style={{ ...inputStyle, width: "200px" }} />
          <p style={{ marginTop: "10px" }}>Name:</p>
          <input type="text" style={{ ...inputStyle, width: "200px" }} />
        </div>
      </div>
    </section>
  );
};

export default Undertaking;
