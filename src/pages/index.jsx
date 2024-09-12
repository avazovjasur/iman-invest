import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  function redirectToReg() {
    router.push('/registration/lang')
  }

  useEffect(() => {
    setTimeout(() => {
      redirectToReg()
    }, 3000)
  }, [])

  return (
    <>
      <SplashScreen />
    </>
  )
}
