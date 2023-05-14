import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";
import Input from "@/common/components/input";
import { AuthAPI } from "@/lib/api/auth/authApi";

import * as styles from "../AuthPages.styles";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = await AuthAPI.loginUser(email, password);
      console.log("Token:", token);
      const returnMain = () => {
        void router.push("/main");
      };
      returnMain();
    } catch (error) {
      alert("Try again, something went wrong!");
      console.error("Login failed:", error);
    }
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.textContent}>
          <Typography variant="h4Medium">Вхід</Typography>
          <Typography variant="body2">
            Раді тебе бачити! Введіть інформацію в полях
          </Typography>
        </Box>
        <Box sx={styles.inputContainer}>
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
        </Box>
        <Box sx={styles.buttonContent}>
          <Button type="submit" text="Увійти" variant="contained" />
          <Box sx={styles.smallTextContent}>
            <Typography variant="body1">Немає аккаунту?</Typography>
            <HyperLink
              source="./registration"
              text="Зареєструйся прямо зараз"
            />
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default LoginPage;
