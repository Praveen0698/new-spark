import React, { useState } from "react";

export default function JoinForm() {
  const [offerNo, setOfferNo] = useState("");
  const [offerDate, setOfferDate] = useState("");
  const [dutyShift, setDutyShift] = useState("afternoon");
  const [joinDate, setJoinDate] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "1px solid black",
    width: "150px",
    margin: "0 5px",
    outline: "none",
  };

  const selectStyle = {
    ...inputStyle,
    width: "120px",
  };

  return (
    <section className="contact office" style={{ marginTop: "50px" }}>
      <h3 style={{ marginBottom: 20 }}>
        ANNEXURE-D: <span>Joining Report</span>
      </h3>

      <p style={{ lineHeight: "2" }}>
        With Reference to your offer no.{" "}
        <input
          type="text"
          value={offerNo}
          onChange={(e) => setOfferNo(e.target.value)}
          style={inputStyle}
          required
        />
        {" "} Dated {" "}
        <input
          type="date"
          value={offerDate}
          onChange={(e) => setOfferDate(e.target.value)}
          style={{ ...inputStyle, width: "160px" }}
          required
        />
        {", "}
        I have to state that I accepted your offer on the BDL and conditions mentioned there in and report myself for duty at Bharat Dynamics Limited (BDL), Address: Bharat Dynamics Limited, Corporate office, Plot No. 38-39, TSFC Building (Near ICICI Towers), Financial District, Gachibowli, Hyderabad, Telangana (State) - 500032., Technical in the Management Trainee (Technical Services) E-1 with Pay Matrix, Pay Scale Code E-II, Pay Scale ₹ 40,000 - ₹ 1,40,000 (2017 IDA based) for BDL Management Trainee (Technical Services) is 7th CPC Pay Matrix Level E-1 on the {" "}
        <select
          value={dutyShift}
          onChange={(e) => setDutyShift(e.target.value)}
          style={selectStyle}
          required
        >
          <option value="forenoon">forenoon</option>
          <option value="afternoon">afternoon</option>
        </select>
        {" "} of {" "}
        <input
          type="date"
          value={joinDate}
          onChange={(e) => setJoinDate(e.target.value)}
          style={{ ...inputStyle, width: "160px" }}
          required
        />{" "}
        at BDL (A Government of India Enterprise) Address: - Bharat Dynamics Limited, Kanchanbagh (PO), Hyderabad, Telangana - 500058
      </p>

      {/* Upload & Signature Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* File Upload */}
        <div style={{ flex: "1 1 45%" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Upload Joining Report:
          </label>

          <label
            htmlFor="fileUpload"
            style={{
              display: "inline-block",
              padding: "4px 10px",
              color: "#000",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              border: "1px solid black",
            }}
          >
            Choose File
          </label>

          <input
            id="fileUpload"
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.png"
            required
            style={{ display: "none" }}
          />

          {file && (
            <span
              style={{
                display: "block",
                marginTop: "8px",
                fontStyle: "italic",
              }}
            >
              {file.name}
            </span>
          )}
        </div>

        {/* Signature & Name */}
        <div style={{ flex: "1 1 45%", textAlign: "right" }}>
          <p>Signature of the Candidate:</p>
          <input type="text" style={{ ...inputStyle, width: "200px" }} />
          <p style={{ marginTop: "10px" }}>Name:</p>
          <input type="text" style={{ ...inputStyle, width: "200px" }} />
        </div>
      </div>
    </section>
  );
}
