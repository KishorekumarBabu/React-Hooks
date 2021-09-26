import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // Cache the function
  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, []);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button text="Age" handleClick={incrementAge} />
      <Count text="Salary" count={salary} />
      <Button text="Salary" handleClick={incrementSalary} />
    </div>
  );
}
