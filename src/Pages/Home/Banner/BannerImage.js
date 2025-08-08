import React from "react";
// import picture from "../../../Assets/Images/image2.jpg";
// import picture from "../../../Assets/Images/my_oldPic.jpg"
import picture from "../../../Assets/Images/my_oldPic.jpeg"
const BannerImage = () => {
  return (
    <div className="my-6">
      <img src={picture} alt="banar" className="rounded-full w-3/4 block mx-auto p-10 border shadow-inner shadow-pink-300" />
    </div>
  );
};

export default BannerImage;
