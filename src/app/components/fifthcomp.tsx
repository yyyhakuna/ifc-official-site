import React from "react";

type ItemProps = {
  title: string;
  desc: string;
};

const Item: React.FC<ItemProps> = ({ title, desc }) => {
  return (
    <div>
      <div className="sm:w-60 px-10 sm:px-0 text-center text-sky-500 text-4xl font-normal font-ubnutu ">
        {title}
      </div>
      <div className=" text-center text-gray-100 text-xs font-bold font-ubnutu ">
        {desc}
      </div>
    </div>
  );
};

const FifthComp = () => {
  const itemLists: ItemProps[] = [
    {
      title: "62,5 milioni",
      desc: "Persone connesse a Internet",
    },
    {
      title: "11,3 milioni",
      desc: "Persone fornite di energia",
    },
    {
      title: "226,5 miliardi di dollari",
      desc: "Nel volume del finanziamento del commercio",
    },
    {
      title: "516,9 miliardi di dollari",
      desc: "In impatto dai prestiti alle PMI",
    },
  ];
  return (
    <div className="bg-black sm:flex py-15 justify-center gap-20">
      <div className="space-y-5">
        <div className=" text-white text-4xl font-light font-ubnutu text-center">
          IFC in sintesi
        </div>
        <div className="sm:w-80 px-10 sm:px-0 text-center text-white text-xs font-normal font-ubnutu leading-none">
          IFC, membro del Gruppo della Banca Mondiale, è la più grande
          istituzione globale per lo sviluppo focalizzata sul settore privato
          nei mercati emergenti. Operiamo in oltre 100 paesi, utilizzando il
          nostro capitale, la nostra competenza e la nostra influenza per creare
          mercati e opportunità nei paesi in via di sviluppo.
        </div>
        <div className="sm:w-80 px-10 sm:px-0 text-center text-white text-xs font-normal font-ubnutu leading-none">
          Nell'anno fiscale 2024, la IFC ha impegnato la cifra record di 56
          miliardi di dollari in aziende private e istituzioni finanziarie nei
          paesi in via di sviluppo, sfruttando le soluzioni del settore privato
          e mobilitando capitali privati ​​per creare un mondo libero dalla
          povertà su un pianeta vivibile.
        </div>
      </div>
      <div className="grid sm:grid-cols-2  sm:gap-14 gap-6 mt-6 sm:mt-0">
        {itemLists.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default FifthComp;
