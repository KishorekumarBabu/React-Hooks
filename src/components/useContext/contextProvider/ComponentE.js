import React, { useContext } from "react";
import ComponentF from "./componentF";
import { UserContext, UserContext2 } from "../../../App";

export default function ComponentE() {
  const user = useContext(UserContext);
  const user2 = useContext(UserContext2);

  return (
    <div>
      {user} - {user2}
      <ComponentF />
    </div>
  );
}
