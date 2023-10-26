import React from "react";
import { faker } from "@faker-js/faker";

const Fakedata = () => {
  const imageUrl = faker.image.fashion(640, 480); // Change the width and height as needed
  return (
    <div>
      <h2>Transportation Image</h2>
      <img src={imageUrl} alt="Transportation" />
    </div>
  );
};

export default Fakedata;
