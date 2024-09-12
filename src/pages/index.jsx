import React, { useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function redirectToReg() {
    router.push('/registration/lang');
  }

  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.disableClosingConfirmation(); 
    }

    const timer = setTimeout(() => {
      redirectToReg();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen />
    </>
  );
}