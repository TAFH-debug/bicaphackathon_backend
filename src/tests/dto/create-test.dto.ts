export type QuestionCreate = {
  text: string;
  options: string[];
  right: number;
};

export class CreateTestDto {
  name: string;
  questions: QuestionCreate[];
  difficulty: number;
  category: string;
}
