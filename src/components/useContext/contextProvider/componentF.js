import React from "react";
import { UserContext, UserContext2 } from "../../../App";

// React context without hooks
export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <UserContext2.Consumer>
              {(user2) => {
                return (
                  <div>
                    User Context Value {user} {user2}
                  </div>
                );
              }}
            </UserContext2.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
