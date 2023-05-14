import { useQuery } from "react-query";
import { Alert, AlertTitle, CircularProgress, Container } from "@mui/material";

import SubjectCard from "@/common/pages/subject-page/common/subject-card";
import { SubjectAPI } from "@/lib/api/subject/Subject";
import { parseScore } from "@/utils";

import { container } from "./SubjectPage.styles";

const SubjectPage = () => {
  const { isLoading, isError, data } = useQuery(
    ["subjects"],
    () => SubjectAPI.getSubjects(),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <CircularProgress />;

  if (isError)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    );

  return (
    <Container sx={container}>
      {data?.map((subject) => (
        <SubjectCard
          key={subject.subjectId}
          name={subject.name}
          score={parseScore(subject.currentScore, subject.maxScore)}
          description={subject.description}
        />
      ))}
    </Container>
  );
};

export default SubjectPage;
