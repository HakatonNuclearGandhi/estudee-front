import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";
import Input from "@/common/components/input";
import { AuthAPI } from "@/lib/api/auth/authApi";

import * as styles from "../AuthPages";

const RegistrationPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (passwordCheck == password) {
      try {
        const data = await AuthAPI.registerUser(username, email, password);
        console.log("Status and message:", data);
        const returnAuth = () => {
          void router.push("/login");
        };
        returnAuth();
      } catch (error) {
        alert("Try again, something went wrong!");
        alert(
          "Requirements for password:\n" +
            "Require Digit = true;\n" +
            "Require Lowercase = true;\n" +
            "Require Non Alphanumeric = true;\n" +
            "RequireUppercase = true;\n" +
            "Required Length = 6;\n" +
            "Required Unique Chars = 1"
        );
        console.error("Registration failed:", error);
      }
    } else alert("Password mismatch!");
    setPassword("");
    setPasswordCheck("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.textContent}>
          <Typography variant="h4Medium">Створення акаунта</Typography>
          <Typography variant="body2">
            Перший раз на нашому сервісі? Заповни всі поля
          </Typography>
        </Box>
        <Box sx={styles.inputContainer}>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Ім'я користувача"
            type="text"
            isRequired
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Пошта"
            type="email"
            isRequired
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Пароль"
            type="password"
            isRequired
          />
          <Input
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            label="Підтвердження пароля"
            type="password"
            isRequired
          />
        </Box>
        <Box sx={styles.buttonContent}>
          <Button type="submit" text="Зареєструватися" variant="contained" />
          <Box sx={styles.smallTextContent}>
            <Typography variant="body1">Вже маєш акаунт?</Typography>
            <HyperLink source="./login" text="Переходь на сторінку входу" />
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default RegistrationPage;
