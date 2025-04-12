import React from "react";
import "../styles/firstComp.css";

const FirstComp = () => {
  return (
    <div className="sm:h-200">
      <div>
        <img
          src="/firstComp-bg.png"
          alt="bg"
          className="w-[100vw] object-cover sm:absolute sm:h-200"
        />
      </div>
      <div className="flex relative sm:ml-[20%]">
        <div className=" p-5 bg-sky-950/90 pb-10 blue-triangle relative sm:mt-[20%] w-[100vw] sm:w-auto">
          <div className=" text-white text-2xl w-full sm:w-auto sm:text-4xl font-light font-ubnutu">
            Lo sviluppo è il modo in cui
            <br />
            competiamo, cresciamo e<br />
            manteniamo la sicurezza
          </div>
          <div className="sm:max-w-[320px] w-[270px] text-white text-xs font-normal font-ubnutu mt-[10px] mb-4">
            Perché il lavoro è il modo più efficace per costruire economie
            autosufficienti e sbloccare opportunità.
          </div>

          <button className="bg-amber-400 text-sky-950 text-xs font-bold font-ubnutu px-5 py-2 ">
            Saperne di più
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
