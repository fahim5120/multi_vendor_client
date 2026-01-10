// import { Box, Radio } from "@mui/material";
// import React from "react";

// const Addresscard = ({ value, selectedValue, handleChange, item }) => {
//   //item mean address
//   return (
//     <Box className="p-5 border border-gray-300 rounded-md flex z-0">
//       <div>
//         <Radio name="radio-buttons" 
//         checked={selectedValue==value}
//         value={value}
//         onChange={handleChange}
//         />
//       </div>
//       <div className="space-y-3 pt-3">
// <h1>{"rafeeq"}</h1>
// <p>{"street 123, kottakkal, 676503, kerala, India"}</p>
// <p>
//     <strong>
//         Mobile:
//     </strong> 987654123
// </p>
//       </div>
//     </Box>
//   );
// };

// export default Addresscard;



// import { Box, Radio } from "@mui/material";
// import React from "react";

// const Addresscard = ({ value, selectedValue, handleChange, item }) => {
//   // item = address object
//   return (
//     <Box className="p-5 border border-gray-300 rounded-md flex z-0">
//       <div>
//         <Radio
//           name="radio-buttons"
//           checked={value === selectedValue}
//           value={value}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-3 pt-3">
//         <h1>{item?.name}</h1>

//         <p className="w-[320px]">
//           {item?.address}, {item?.locality}, {item?.city},{" "}
//           {item?.state} - {item?.pinCode}
//         </p>

//         <p>
//           <strong>Mobile:</strong> {item?.mobile}
//         </p>
//       </div>
//     </Box>
//   );
// };

// export default Addresscard;


import React from "react";
import { Radio } from "@mui/material";

const AddressCard = ({ value, selectedValue, handleChange, item }) => {
  return (
    <div className="p-5 border rounded-md flex">
      <Radio
        checked={value === selectedValue}
        onChange={handleChange}
        value={value}
        name="address-radio"
      />

      <div className="space-y-3 pt-3">
        <h1>{item.name}</h1>
        <p className="w-[320px]">
          {item.address}, {item.locality}, {item.city}, {item.state} -{" "}
          {item.pincode}
        </p>
        <p>
          <strong>Mobile:</strong> {item.mobile}
        </p>
      </div>
    </div>
  );
};

export default AddressCard;


