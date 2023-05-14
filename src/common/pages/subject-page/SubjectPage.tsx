import { Container } from "@mui/material";

import SubjectCard from "@/common/pages/subject-page/common/subject-card";

import { container } from "./SubjectPage.styles";

const SubjectPage = () => (
  <Container sx={container}>
    <SubjectCard
      name="Математичний аналіз 1. Інтегральні вичіслення"
      score="12/50"
      description="Предмет для закриття. Потрібно здати екзамен до 20.12.2021."
    />
  </Container>
);

export default SubjectPage;
