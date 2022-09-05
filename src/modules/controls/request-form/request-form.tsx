import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../../../store/actions";
import "./request-form.css";

const RequestForm = () => {
  const [fieldText, setFieldText] = useState("");
  const dispatch = useDispatch();
  const handleFormSubmit = (event: any) => {
    dispatch(AppActions.controlsActions.getRequest(fieldText));
    setFieldText("");
    event.preventDefault();
  };

  return (
    <div className="request-form--main-root">
      <form
        action="submit"
        className="request-form--form"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <input
          type="text"
          placeholder="Request key..."
          value={fieldText}
          onChange={(event) => setFieldText(event.target.value)}
        />
        <button type="submit">Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
