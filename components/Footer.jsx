import React from "react";

const inputStyle = {
  border: "none",
  borderBottom: "1px solid black",
  width: "150px",
  margin: "0 5px",
  outline: "none",
};

const Footer = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section style={{ marginTop: "50px" }}>
      <h3 style={{ marginBottom: 20 }}>
        ANNEXURE-F: <span> Declaration </span>
      </h3>

      <p style={{ lineHeight: "1.8" }}>
        “I <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        Son/daughter of Shri{" "}
        <input type="text" style={{ ...inputStyle, width: "200px" }} />,
        resident <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        of <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        Street, <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        Village/Town/City,{" "}
        <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        District,{" "}
        <input type="text" style={{ ...inputStyle, width: "200px" }} /> State,
        hereby declare that I belong to the{" "}
        <input type="text" style={{ ...inputStyle, width: "200px" }} />{" "}
        (indicate minority community notified by Central Government i.e.
        Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div>
          <p>
            Place:{" "}
            <input type="text" style={{ ...inputStyle, width: "200px" }} />
          </p>
          <p>
            Date:{" "}
            <input type="text" style={{ ...inputStyle, width: "200px" }} />
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p>Signature of the Candidate:</p>
          <input
            type="text"
            style={{ ...inputStyle, width: "200px", marginBottom: 20 }}
          />
          <p>Name of the Candidate:</p>
          <input type="text" style={{ ...inputStyle, width: "200px" }} />
        </div>
      </div>

      <div style={{ marginTop: "30px", fontSize: "14px" }}>
        <strong>Note:</strong> At the time of document verification, such
        candidates claiming waiver of examination fee will be required to
        furnish ‘Minority Community Declaration’ affidavit on Non Judicial Stamp
        paper that he/she belongs to any of the minority community notified by
        Central Government (i.e. Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
      </div>
    </section>
  );
};

export default Footer;
