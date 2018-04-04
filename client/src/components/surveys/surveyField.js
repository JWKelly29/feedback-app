// Survey field contains logic to render label and text input
import React from "react";

export default ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div>
      <div style={{ marginTop: "2%" }}>
        <label style={{ display: "inline-block", textAlign: "center" }}>
          {label}
        </label>
        <div
          className="red-text"
          style={{
            display: "inline-block",
            marginLeft: "10%",
            lineHeight: "10px"
          }}
        >
          {meta.touched &&
            meta.error && (
              <i
                className="material-icons"
                style={{ verticalAlign: "text-bottom", marginRight: "5px" }}
              >
                error_outline
              </i>
            )}
          {meta.touched && meta.error}
        </div>
      </div>
      <input {...input} />
    </div>
  );
};
