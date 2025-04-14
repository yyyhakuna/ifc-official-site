import AdditionnalComp from "./components/additionalComp";
import EndComp from "./components/endComp";
import FifthComp from "./components/fifthcomp";
import FirstComp from "./components/firstComp";
import FourthComp from "./components/fourthComp";
import Header from "./components/header";
import SecondComp from "./components/secondComp";
import SeventhComp from "./components/seventhComp";
import Sixthcomp from "./components/sixthComp";
import ThirdComp from "./components/thirdComp";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <Header />
      <FirstComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
      <Sixthcomp />
      <SeventhComp />
      <AdditionnalComp />
      <EndComp />
    </div>
  );
}
