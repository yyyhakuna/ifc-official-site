import React from "react";

const ThirdComp = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/thirdComp-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "50%", // 对于16:9的图片，使用56.25%
      }}
      className="w-full bg-no-repeat relative"
    >
      <img
        src="/thirdComp-bigCoin.png"
        alt=""
        className="absolute left-5 sm:top-[-80px] top-[-60px] sm:w-60 w-25"
      />
      <img
        src="/thirdComp-smallCoin.png"
        alt=""
        className="absolute sm:right-12 right-6 sm:bottom-[-50px] w-15 sm:w-28 bottom-[-20px] z-10"
      />
    </div>
  );
};

export default ThirdComp;
