import React from "react";

const EndComp = () => {
  return (
    <div>
      <div className="bg-sky-500 flex justify-center pb-15 pt-5">
        <div className="w-[60%]">
          <div className="justify-center text-sky-950 text-2xl font-bold font-['Ubuntu'] leading-relaxed">
            Rimani informato
          </div>
          <div className="sm:w-[651px] h-9 justify-center text-sky-950 text-sm font-normal font-['Ubuntu'] leading-snug">
            Iscriviti alle nostre newsletter per ricevere le ultime notizie e
            gli aggiornamenti sullo sviluppo del settore privato in tutto il
            mondo.
          </div>
        </div>
      </div>
      <div className="bg-gray-800 flex items-center flex-col">
        <div className="sm:w-[60%] w-full border-b-[0.68px] border-stone-300 h-30 flex items-center">
          <img src="/endComp-icon.png" alt="" className="w-40" />
        </div>
        <div className="flex justify-between sm:w-[60%] w-full px-6 sm:px-0 py-5">
          <div className="text-white text-xs font-bold font-ubnutu">
            About IFC
          </div>
          <div className="text-gray-100 text-[9.51px] font-normal font-ubnutu">
            © 2025 IFC
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndComp;
