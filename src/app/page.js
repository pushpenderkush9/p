"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Carousel from "./components/Carousel";
import ImgCard from "./components/ImgCard";
import FeedbackDoctor from "./components/FeedbackDoctor";
import Footer from "./components/Footer";
export default function Home() {
  const router = useRouter();

  const handleClick = () =>{
    router.push("/login");
  }
  return (
    <>
    <div className="bg-green-50">
    <div className="flex  bg-green-50 justify-between items-center p-4 ">
      <Image
      src="/Logo/logo.png"
      alt='Logo'
      width={100}
      height={50}
      />
      <button onClick={handleClick} className="bg-[#FF9149] font-bold  text-2xl p-3 border rounded-2xl">Login</button>
      </div>
      <div className="justify-ceneter m-5 items-center text-center ">
      <Carousel/>
      <button onClick={handleClick} className="text-3xl m-7 font-extrabold  bg-[#FF9149]   text-2xl p-3 border rounded-2xl">Lets started</button>
      <ImgCard/>
      <h1 className="font-extrabold text-3xl">FeedBack From Doctors</h1>
      <FeedbackDoctor/>
      </div>
      </div>
      <Footer />
    </>
  );
}
