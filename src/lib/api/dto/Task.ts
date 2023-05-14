export type GetTaskDTO = {
  taskId: string;
  score: number;
  statusName: string;
  subjectName: string;
  taskName: string;
  maxScore: number;
  deadline: Date;
};

export type GetTasksDTO = {
  tasks: GetTaskDTO[];
};
