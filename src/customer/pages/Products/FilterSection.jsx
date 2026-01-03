// import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
// import { teal } from '@mui/material/colors'
// import React, { useState } from 'react'
// import { colors } from '../../../data/filters/color'
// import { price } from '../../../data/filters/price'

// const FilterSection = () => {
//   const [expendColor,setExpendColor]=useState(false)
//   const handleExpendColor=()=>setExpendColor(!expendColor)
//   return (
//     <div className='-z-50 space-y-5 bg-white'>
//       <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
//         <p className='text-lg font-semibold'>Filters</p>
//         <Button className=''>clear all</Button>
//       </div>
//       <Divider />
//       <div className='px-9 space-y-6 mt-5'>
//         <section className='pb-5'>
//           <FormControl sx={{ zIndex: 0 }}>
//             <FormLabel sx={{
//               fontSize: "16px",
//               fontWeight: "bold",
//               color: teal[600],

//             }}>Color</FormLabel>

//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               {colors.slice(0,expendColor?colors.length:5).map((item) => <FormControlLabel value={item.name} control={<Radio />} label={item.name} />)}

//             </RadioGroup>

//           </FormControl>
//           <div className=''>
//             <Button onClick={handleExpendColor}>{expendColor?"hide":`+ ${colors.length-5}more`}</Button>
//           </div>
//            <Divider />
//         </section>

//          <section>
//           <FormControl sx={{ zIndex: 0 }}>
//             <FormLabel sx={{
//               fontSize: "16px",
//               fontWeight: "bold",
//               color: teal[600],

//             }}>Price</FormLabel>

//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               {price.map((item) => <FormControlLabel 
//               value={item.value} 
//               control={<Radio />} 
//               label={item.name} />)}

//             </RadioGroup>

//           </FormControl>
//            <Divider />
//         </section>

//    <section>
//           <FormControl sx={{ zIndex: 0 }}>
//             <FormLabel sx={{
//               fontSize: "16px",
//               fontWeight: "bold",
//               color: teal[600],

//             }}>Discount</FormLabel>

//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               {price.map((item) => <FormControlLabel 
//               value={item.value} 
//               control={<Radio />} 
//               label={item.name} />)}

//             </RadioGroup>

//           </FormControl>
          
//         </section>
//       </div>


//     </div>
//   )
// }

// export default FilterSection

import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colors } from '../../../data/filters/color'
import { price } from '../../../data/filters/price'

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false)
  const handleExpendColor = () => setExpendColor(!expendColor)

  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
        <p className='text-lg font-semibold'>Filters</p>
        <Button className=''>clear all</Button>
      </div>

      <Divider />

      <div className='px-9 space-y-6 mt-5'>

        {/* COLOR */}
        <section className='pb-5'>
          <FormControl sx={{ zIndex: 0 }}>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
              }}
            >
              Color
            </FormLabel>

            <RadioGroup name="color">
              {colors
                .slice(0, expendColor ? colors.length : 5)
                .map((item, index) => (
                  <FormControlLabel
                    key={item.name || index}
                    value={item.name}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
            </RadioGroup>
          </FormControl>

          <div>
            <Button onClick={handleExpendColor}>
              {expendColor ? "hide" : `+ ${colors.length - 5} more`}
            </Button>
          </div>

          <Divider />
        </section>

        {/* PRICE */}
        <section>
          <FormControl sx={{ zIndex: 0 }}>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
              }}
            >
              Price
            </FormLabel>

            <RadioGroup name="price">
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.value || index}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Divider />
        </section>

        {/* DISCOUNT */}
        <section>
          <FormControl sx={{ zIndex: 0 }}>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
              }}
            >
              Discount
            </FormLabel>

            <RadioGroup name="discount">
              {price.map((item, index) => (
                <FormControlLabel
                  key={`discount-${item.value || index}`}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

      </div>
    </div>
  )
}

export default FilterSection
