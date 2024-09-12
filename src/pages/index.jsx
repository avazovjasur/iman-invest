import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  function redirectToReg() {
    router.push('/registration/lang')
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     redirectToReg()
  //   }, 3000)
  // }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      const tg = window.Telegram.WebApp;

      // Настраиваем приложение для работы внутри Telegram
      tg.expand();  // Разворачиваем приложение на полный экран

      tg.MainButton.text = "Продолжить";  // Устанавливаем текст для основной кнопки
      tg.MainButton.show();  // Показываем основную кнопку
      tg.MainButton.onClick(() => {
        alert("Кнопка нажата!");
      });
    }
  }, []);

  return (
    <>
      <SplashScreen />
    </>
  )
}
