import React, { useEffect, useState } from "react";

export default function HookCounter2() {
  const [mousePosition, setMousePosition] = useState({ X: 0, Y: 0 });

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setMousePosition({ X: e.clientX, Y: e.clientY });
  };

  useEffect(() => {
    console.log("UseEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hook: X - {mousePosition.X} Y - {mousePosition.Y}
    </div>
  );
}
