import Image from "next/image";
import Hero from "./components/Hero";
import FirstProgrammingjob from "./components/FirstProgrammingjob";
import HowitWorks from "./components/HowitWorks";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <FirstProgrammingjob />
      <HowitWorks />
      <Faqs />
    </>
  );
}
