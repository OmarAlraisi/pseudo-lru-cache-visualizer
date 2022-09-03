import { useState } from "react";
import "./request-form.css";

const RequestForm = () => {
  const [fieldText, setFieldText] = useState("");
  const handleFieldChange = (event: any) => {
    setFieldText(event.target.value);
  };

  const sendRequest = (event: any) => {
    // hand request
    setFieldText("");
    event.preventDefault();
  };

  return (
    <div className="request-form--main-root">
      <form
        action="submit"
        className="request-form--form"
        onSubmit={(event) => sendRequest(event)}
      >
        <input
          type="text"
          placeholder="Request key..."
          value={fieldText}
          onChange={(event) => handleFieldChange(event)}
        />
        <button type="submit">Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
