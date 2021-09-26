import React from "react";

function Button(props) {
  console.log("Rendering Button");
  const { text, handleClick } = props;
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default React.memo(Button);
