import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import styles from "../../styles/modules/number.module.scss";

const Number = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

//   function validatePhoneNumber(number) {
//     const regex = /^\d{9}$/;
//     return regex.test(number);
//   }

  async function handleSubmit() {
    router.push("/registration/code")
    // if (!validatePhoneNumber(phoneNumber)) {
    //   alert("Введите корректный номер телефона");
    //   return;
    // }

    // const fullPhoneNumber = `998${phoneNumber}`;

    // const requestBody = {
    //   auth_type: 1,
    //   email: `${uuid()}@iman.uz`,
    //   phone_number: fullPhoneNumber,
    // };

    // console.log("Otp-Secret:", process.env.NEXT_PUBLIC_OTP_SECRET);

    // try {
    //   const response = await axios.post(
    //     "https://dev.api.investment.imaninvest.com/v1/investor/send-otp",
    //     requestBody,
    //     {
    //       headers: {
    //         accept: "application/json",
    //         "Content-Type": "application/json",
    //         "Otp-Secret": process.env.NEXT_PUBLIC_OTP_SECRET,
    //       },
    //     }
    //   );

    //   if (response.status === 200) {
    //     router.push("/registration/code");
    //   } else {
    //     console.log("Response data:", response.data);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Введите свой
        <br /> мобильный номер
      </h1>
      <p className={styles.subtitle}>
        Это необходимо для подтверждения
        <br /> вашего аккаунта
      </p>
      <div className={styles.numberInput}>
        <p>+998</p>
        <input
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          Нажимая на кнопку Продолжить вы соглашаетесь с условиями{" "}
          <span>Публичной оферты, Политики конфиденциальности</span>
        </p>
        <button onClick={handleSubmit} className={styles.next} type="button">
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Number;
