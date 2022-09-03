import { useState } from "react";
import "./request-form.css";

const RequestForm = () => {
  const [fieldText, setFieldText] = useState("");
  const handleFieldChange = (text: any) => {
    setFieldText(text.target.value);
  };

  const sendRequest = () => {
    // hand request
  };

  return (
    <div className="request-form--main-root">
      <form
        action="submit"
        className="request-form--form"
        onSubmit={() => sendRequest()}
      >
        <input
          type="text"
          placeholder="Request key..."
          onChange={(text) => handleFieldChange(text)}
        />
        <button type="submit">Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
