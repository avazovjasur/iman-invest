import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [preloader, setPreloader] = useState(false)

  return (
    <>
      {preloader && <SplashScreen />}
    </>
  )
}
