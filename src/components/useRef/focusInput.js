import React, { useEffect, useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the inpu element
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
