import React, { useState } from "react";

export default function JoinForm() {
  const [offerNo, setOfferNo] = useState("");
  const [offerDate, setOfferDate] = useState("");
  const [dutyShift, setDutyShift] = useState("forenoon");
  const [joinDate, setJoinDate] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
        With reference to your Offer No. Edn.
        <input
          type="text"
          value={offerNo}
          onChange={(e) => setOfferNo(e.target.value)}
          style={inputStyle}
          required
        />
        {"  "}dated{"  "}
        <input
          type="date"
          value={offerDate}
          onChange={(e) => setOfferDate(e.target.value)}
          style={{ ...inputStyle, width: "160px" }}
          required
        />
        , I have to state that I accepted your offer on the terms and conditions
        mentioned therein and report myself for duty as Senior Resident on the{" "}
        {"  "}
        <select
          value={dutyShift}
          onChange={(e) => setDutyShift(e.target.value)}
          style={selectStyle}
          required
        >
          <option value="forenoon">forenoon</option>
          <option value="afternoon">afternoon</option>
        </select>
        {"  "} of {"  "}
        <input
          type="date"
          value={joinDate}
          onChange={(e) => setJoinDate(e.target.value)}
          style={{ ...inputStyle, width: "160px" }}
          required
        />{" "}
        {"  "}
        at the Jawaharlal Institute of Post-Graduate Medical Education and
        Research, Puducherry.
      </p>

      <div style={{ margin: "30px 0" }}>
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
          <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
            {file.name}
          </span>
        )}
      </div>
    </section>
  );
}
