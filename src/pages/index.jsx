import React, { useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function redirectToReg() {
    router.push('/registration/lang');
  }

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      webApp.expand();
      webApp.disableClosingConfirmation(); 
    }

    const timer = setTimeout(() => {
      redirectToReg();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen />
    </>
  );
}