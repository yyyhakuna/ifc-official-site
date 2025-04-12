import React from "react";

interface CardProps {
  img: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ img, title, desc }) => {
  return (
    <div className="sm:w-[20vw] max-w-[400px] relative w-[80%] mx-auto">
      <img className="" src={img} />

      <div className="w-[95%] translate-y-[-20px] bg-neutral-900 pt-5 px-4 pb-8">
        <div className=" text-white text-sm font-medium font-ubnutu ">
          {title}
        </div>

        <div className=" justify-center text-white text-xs font-normal font-ubnutu ">
          {desc}
        </div>
      </div>
    </div>
  );
};

const SecondComp = () => {
  const cardLists: CardProps[] = [
    {
      img: "/secondcomp-img1.png",
      title: "Cercare rifugio",
      desc: `Una startup tecnologica sta contribuendo a rendere la proprietà della
          casa una realtà per le persone in India che non hanno un accesso
          adeguato all'alloggio.`,
    },
    {
      img: "/secondcomp-img2.png",
      title: "Dare potere alle donne paraguaiane  nell'agroindustria",
      desc: `Le donne contribuiscono in modo significativo al settore agricolo paraguaiano, ma incontrano difficoltà nell'accesso a pari opportunità e risorse.`,
    },
    {
      img: "/secondcomp-img3.png",
      title: "Lorenzo Vitalle",
      desc: `Amministratore delegato della sede centrale europea (Italia) di American International Finance, focalizzato sullo sviluppo di investimenti nei mercati azionari, fondi, obbligazionari e delle criptovalute italiani.`,
    },
  ];
  return (
    <div className="flex justify-center sm:pt-30 pt-10  bg-black pb-9 relative">
      <img
        src="/secondComp-bigSquare.png"
        alt=""
        className="absolute right-0 w-26"
      />
      <img
        src="/secondComp-smallSquare.png"
        alt=""
        className="absolute right-10 top-80 w-12"
      />
      <div className="space-y-6">
        <div className="font-ubnutu text-[27px] text-[#fff]">
          Le ultime novità da IFC
        </div>

        <div className="sm:flex gap-6 ">
          {cardLists.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondComp;
