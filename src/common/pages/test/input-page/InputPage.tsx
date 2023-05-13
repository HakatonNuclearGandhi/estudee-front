import { Box } from "@mui/system";

import { wrapper } from "@/common/pages/test/input-page/InputPage.style";

import Input from "../../../components/input";

const InputPage = () => {
  return (
    <Box sx={wrapper}>
      <Input label="Ім'я користувача" />
      <br /> <Input label="Пошта" type="email" isRequired />
      <br /> <Input label="Пароль" type="password" />
      <br /> <Input label="Підтвердження паролю" />
      <br /> <Input label="Пароль" size="medium" type="password" isDisabled />
      <br />
      <Input label="Ім'я користувача" size="medium" />
    </Box>
  );
};
export default InputPage;
