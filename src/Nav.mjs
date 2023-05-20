import React from "react";
const Navbar = () => {
  const data = [
    {
      id: 1,
      name: "ram",
    },
    {
      id: 2,
      name: "ravan",
    },
  ];
  let ind = 1;
  let details = data[ind]
  const handleClick = ()=>{
    ind = ind +1;
  }

  return (
    <>
      <span>{details.id}</span>
      <p><b>{details.name}</b></p>
      <button onClick={handleClick}>next</button>
    </>
  );
};
