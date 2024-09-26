import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const [pin, setPin] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pin = localStorage.getItem('pinCode')
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')
      setPin(pin)
      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
    }
  }, [])

  function redirectToReg() {
    const timer = setTimeout(() => {
      router.push('/registration/lang')
    }, 1000)

    return () => clearTimeout(timer)
  }

  function redirectToPin() {
    const timer = setTimeout(() => {
      router.push('/login/pin')
    }, 1000)

    return () => clearTimeout(timer)
  }

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp

      webApp.expand()
      webApp.disableClosingConfirmation()
    }

    if (pin && accessToken && refreshToken) {
      redirectToPin()
    } else {
      redirectToReg()
    }
  }, [pin, accessToken, refreshToken])

  return (
    <>
      <SplashScreen />
    </>
  );
}