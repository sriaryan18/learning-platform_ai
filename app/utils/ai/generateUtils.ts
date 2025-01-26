import { QUESTION_LEVEL } from "../../types/constants";

export const generateTestBasedOnTopicUtils = (topic: string) => {
  const prompt = `given the list of topic or notes of the topic generate 3 levels of mcq questions 3 questions per level.Use this ${topic} as context and give in this format levels should be E or M or H . For answers array mention the index of the correct answer`;
  return prompt;
};

export const generateTestsBasedOnStudentProfileAndTopics = (
  topics: string[],
  studentProfile: any
) => {
  const stringifiesStudentProfile = JSON.stringify(studentProfile);
  return `given the  student profile generate the tests for the student based on the weak topics given. Generate 3 levels of mcq questions 3 questions per level Topics: ${topics}. StudentProfile:${stringifiesStudentProfile}. Give programming questions`;
};
export const generateTestForGivenTopicAndLevelAndNumber = (
  topic: string[],
  level: typeof QUESTION_LEVEL,
  numberOfQuestions: number
) => {
  return `given the topic : ${JSON.stringify(
    topic
  )} generate ${numberOfQuestions} of level : ${level}`;
};
