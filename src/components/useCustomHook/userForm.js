import React from "react";
import useInput from "../customHooks/useInput";

export default function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name </label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name </label>
          <input type="text" {...bindLastName} />
        </div>
        <button tyep="submit">Submit</button>
      </form>
    </div>
  );
}
