export class MathExercise {
  question: string;
  answer: number;
}

export class KazakhExercise {
  text: string;
  answer: string;
}

export class HistoryExercise {
  data: object;
}

export class CreateExerciseDto {
  name: string;
  subject: string;
  math: MathExercise | undefined;
  kazakh: KazakhExercise | undefined;
  history: HistoryExercise | undefined;
}
