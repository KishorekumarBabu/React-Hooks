import React from "react";

function Count(props) {
  console.log("Rendering Count");
  const { text, count } = props;
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
