import React, { useState } from "react";
import "./Price.css";
import Input from "../../components/Input";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Price = ({ handleChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
    handleChange({ target: { name: "priceRange", value: priceRange } });
  };

  return (
    <div>
      <h2 className="sidebar-title price-title ">
        Price
        <span style={{ marginLeft: "80px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>

      <div className={`dropdown ${showDropdown ? "open" : ""}`}>
        <label className="sidebar-label-container">
          <input
            type="checkbox"
            value="all"
            name="priceRange"
            onChange={() => handlePriceRangeChange("all")}
            checked={selectedPriceRange === "all"}
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={() => handlePriceRangeChange("under100")}
          value="under100"
          title="Under 100"
          name="priceRange"
          checked={selectedPriceRange === "under100"}
        />
        {showDropdown && (
          <>
            <Input
              handleChange={() => handlePriceRangeChange("100to500")}
              value="100to500"
              title="100 to 500"
              name="priceRange"
              checked={selectedPriceRange === "100to300"}
            />
            <Input
              handleChange={() => handlePriceRangeChange("above500")}
              value="above500"
              title="Above 500"
              name="priceRange"
              checked={selectedPriceRange === "Above500"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Price;

// import React, { useState } from "react";
// import "./Price.css";
// import Input from "../../components/Input";
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";

// const Price = ({ handleChange }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedPriceRange, setSelectedPriceRange] = useState("");

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handlePriceRangeChange = (priceRange) => {
//     setSelectedPriceRange(priceRange);

//     const event = {
//       target: {
//         name: "priceRange",
//         value: priceRange,
//       },
//     };

//     handleChange(event);
//   };

//   // const handlePriceRangeChange = (priceRange) => {
//   //   setSelectedPriceRange(priceRange);
//   //   handleChange("priceRange", priceRange);
//   // };

//   return (
//     <div>
//       <h2 className="sidebar-title price-title ">
//         Price
//         <span style={{ marginLeft: "80px" }}>
//           <button onClick={toggleDropdown} className="show-more-button">
//             {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
//           </button>
//         </span>
//       </h2>

//       <div className={`dropdown ${showDropdown ? "open" : ""}`}>
//         <label className="sidebar-label-container">
//           <input
//             type="checkbox"
//             value="all"
//             name="priceRange"
//             onChange={() => handlePriceRangeChange("all")}
//             checked={selectedPriceRange === "all"}
//           />
//           <span className="checkmark"></span>All
//         </label>
//         <Input
//           handleChange={() => handlePriceRangeChange("under100")}
//           value="Under 100"
//           title="Under 100"
//           name="priceRange"
//           checked={selectedPriceRange === "under100"}
//         />
//         {showDropdown && (
//           <>
//             <Input
//               handleChange={() => handlePriceRangeChange("100to300")}
//               value="100 to 300"
//               title="100 to 300"
//               name="priceRange"
//               checked={selectedPriceRange === "100to300"}
//             />
//             <Input
//               handleChange={() => handlePriceRangeChange("above500")}
//               value="Above 500"
//               title="Above 500"
//               name="priceRange"
//               checked={selectedPriceRange === "above500"}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Price;
