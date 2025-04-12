import React from "react";

interface CardProps {
  topImg: string;
  iconImg: string;
  title: string;
  desc: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  topImg,
  title,
  desc,
  iconImg,
  className,
}) => {
  return (
    <div className={`sm:w-[20%] w-[80%] mx-auto sm:mx-0 + ${className || ""}`}>
      <img src={topImg} className=" sm:h-auto " />
      <div className=" relative bg-white">
        <div
          className="flex items-center bg-[#0a2342] py-4 gap-2 pl-1"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 11% 83%, 11% 100%, 0 100%)",
          }}
        >
          <img src={iconImg} />
          <div className=" justify-center text-white text-base font-medium font-ubnutu leading-snug">
            {title}
          </div>
        </div>
      </div>
      <div className="w-full pb-6 relative px-3">
        <div className="justify-center text-white sm:text-xs text-lg font-ubnutu leading-tight  py-4">
          {desc}
        </div>
        <div className="w-25 h-5 border-b-[0.68px] border-sky-500 text-white text-sm font-ubnutu leading-snug mt-3">
          Saperne di più
        </div>
      </div>
    </div>
  );
};

const FourthComp = () => {
  const cardLists: CardProps[] = [
    {
      topImg: "/fourthComp-img1.png",
      iconImg: "/fourthComp-icon1.svg",
      title: "Prodotti e servizi",
      desc: "Forniamo investimenti, consulenza e gestione patrimoniale: offerte che si rafforzano a vicenda e che possono essere adattate alle esigenze specifiche di ciascun cliente.",
    },
    {
      topImg: "/fourthComp-img2.png",
      iconImg: "/fourthComp-icon2.svg",
      title: "Settori e competenze",
      desc: "Mettiamo a frutto le nostre risorse finanziarie, la nostra competenza tecnica, la nostra esperienza globale e il nostro pensiero innovativo per aiutare i nostri partner a superare le sfide finanziarie, operative e di altro tipo.",
    },
    {
      topImg: "/fourthComp-img3.png",
      iconImg: "/fourthComp-icon1.svg",
      title: "Prodotti e servizi",
      desc: "IFC collabora con i clienti per creare opportunità che aiutino il settore privato a mobilitare soluzioni e finanziamenti per risolvere le sfide dello sviluppo.",
    },
  ];
  return (
    <div className="bg-black relative sm:pt-20">
      <img
        src="/fourthComp-coin.png"
        alt=""
        className="absolute left-6 sm:w-35 w-15 bottom-[-40px] z-10"
      />
      <img
        src="/purpleSquare.png"
        alt=""
        className="absolute sm:w-35 w-15 bottom-[-60px] right-6 z-10"
      />
      <div className="flex flex-col items-center">
        <div className=" justify-center text-white text-3xl font-light font-ubnutu leading-loose">
          Cosa facciamo
        </div>
        <div className="sm:w-200 sm:h-16 h-30 px-5 sm:px-0 text-center justify-center text-white text-sm font-normal font-ubnutu leading-snug">
          Un settore privato forte e impegnato è indispensabile per porre fine
          alla povertà estrema e promuovere la prosperità condivisa. È qui che
          entra in gioco IFC: abbiamo oltre 60 anni di esperienza nello sblocco
          degli investimenti privati, creando mercati e opportunità dove sono
          più necessari.
        </div>
        <div className="justify-center text-white text-xs font-bold font-ubnutu leading-3 border-b border-sky-500 pb-1 inline-block">
          Come richiedere un finanziamento
        </div>
      </div>
      <div className="sm:flex justify-center  sm:mt-40 mt-10 space-y-6 sm:space-y-0">
        {cardLists.map((card, index) => {
          return (
            <Card
              key={index}
              {...card}
              className={index === 1 ? "sm:translate-y-[-70px]" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FourthComp;
