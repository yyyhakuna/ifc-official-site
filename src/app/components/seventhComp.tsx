import React from "react";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ img, title, desc, className }) => {
  return (
    <div className={`sm:w-[20vw] w-[80%] mx-auto sm:mx-0 + ${className || ""}`}>
      <img src={img} className=" sm:h-auto " />
      <div className="px-4 bg-black space-y-3 pt-2">
        <div className="text-neutral-200 text-sm font-bold font-ubnutu">
          {title}
        </div>
        <div className="w-full pb-6 relative">
          <div className=" text-white text-xs font-ubnutu leading-tight ">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

const SeventhComp = () => {
  const cardLists: CardProps[] = [
    {
      img: "/sevenComp-img1.png",
      title: "Finanziamento della crescita aziendale",
      desc: "Una nuova ricerca evidenzia come i mercati azionari e obbligazionari favoriscano la crescita nelle economie in via di sviluppo, contribuendo con 4 trilioni di dollari in capitale e generando il 5% di posti di lavoro in più nell'arco di tre decenni.",
    },
    {
      img: "/sevenComp-img2.png",
      title: "Come portare più carne, uova e latticini nei paesi poveri",
      desc: "In tutto il mondo, la fame e la denutrizione sono in aumento. Nuove tecnologie e pratiche commerciali possono contribuire a rendere le aziende agricole più produttive, a ridurre la malnutrizione e a ridurre le emissioni.",
    },
    {
      img: "/sevenComp-img3.png",
      title: "Rivalutare il rischio nei prestiti dei mercati emergenti",
      desc: "Nuove statistiche del consorzio GEMs su circa 15.000 prestiti a società private in economie in via di sviluppo rivelano che il rischio di investire in aziende dei mercati emergenti è inferiore a quanto comunemente percepito.",
    },
  ];
  return (
    <div className="bg-neutral-800 flex justify-center py-8">
      <div className="space-y-4">
        <div className=" text-neutral-200 text-3xl font-light font-ubnutu text-center sm:text-left">
          Pubblicazioni in evidenza
        </div>
        <div className="sm:flex gap-5 space-y-4 sm:space-y-0">
          {cardLists.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SeventhComp;
