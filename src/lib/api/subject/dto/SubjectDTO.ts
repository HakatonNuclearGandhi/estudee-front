export type GetSubjectDTO = {
  currentScore: number;
  description: string;
  maxScore: number;
  subjectId: string;
  name: string;
};

export type GetSubjectsDTO = {
  subjects: GetSubjectDTO[];
};
