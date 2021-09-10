import { useState } from "react";

const Status = (): JSX.Element => {
  const [funds, setFunds] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [days, setDays] = useState(56);

  // Format numbers to decimal as strings
  const toDecimalString = (num: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(num);
  };

  const formattedFunds: string = toDecimalString(funds);
  const formattedBackers: string = toDecimalString(backers);

  return (
    <div>
      <div>
        <h2>${formattedFunds}</h2>
        <p>of $100,000 backed</p>
      </div>
      <div>
        <h2>{formattedBackers}</h2>
        <p>total backers</p>
      </div>
      <div>
        <h2>{days}</h2>
        <p>days left</p>
      </div>
    </div>
  );
};

export default Status;
