import { Radio } from "@mui/material";
import React from "react";

const Addresscard = ({ value, selectedValue, handleChange, item }) => {
  //item mean address
  return (
    <div className="p-5 border border-gray-300 rounded-md flex">
      <div>
        <Radio name="radio-buttons" 
        checked={selectedValue==value}
        value={value}
        onChange={handleChange}
        />
      </div>
      <div className="space-y-3 pt-3">
<h1>{"rafeeq"}</h1>
<p>{"street 123, kottakkal, 676503, kerala, India"}</p>
<p>
    <strong>
        Mobile:
    </strong> 987654123
</p>
      </div>
    </div>
  );
};

export default Addresscard;
