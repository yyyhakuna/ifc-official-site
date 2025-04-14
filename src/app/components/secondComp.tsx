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

      <div className="w-[95%] translate-y-[-20px] bg-neutral-900 pt-5 px-4 pb-8 space-y-3">
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
      img: "/secondComp-img1.png",
      title: "An Energy-Efficiency Program in Ukraine Heats Up",
      desc: `Halyna Djulai, an owner-resident and house manager in an apartment block on Lypy Street in Lviv, faced a problem that vexes most apartment owners in Ukraine’s big cities. `,
    },
    {
      img: "/secondComp-img2.png",
      title: "Solar Power Offers Armenia Greater Energy Security",
      desc: `Armenia imports nearly all its gas—a level of dependence that poses a systemic challenge to the nation. Though the country has no domestic gas or nuclear resources, it does have one important asset: the sun. `,
    },
    {
      img: "/secondComp-img3.png",
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
