import { Request, Response } from "express";
import StudentProfile from "../mocks/studentProfile";
import {
  generateLongTests,
  generateTestForStudentProfileAndTopic,
  generateTestsForTopics,
} from "../service";
import {
  QUESTION_LEVEL,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK,
} from "../types/constants";

export const generateTestBasedOnTopic = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const topics: string = req.body.topics;

    const responseFromAI = generateTestsForTopics(topics);
    res.status(STATUS_OK).send(responseFromAI);
  } catch (error) {
    res
      .status(STATUS_INTERNAL_SERVER_ERROR)
      .send({ error: "Internal Server Error" });
  }
};

export const generateTestBasedOnStudentProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const topics: string[] = req.body.topics;
    if (!Array.isArray(topics)) {
      res.status(400).send({ error: "Invalid topics format" });
      return;
    }
    const responseFromAi = generateTestForStudentProfileAndTopic(
      topics,
      StudentProfile
    );
    res.status(STATUS_OK).send(responseFromAi);
  } catch (error) {
    res
      .status(STATUS_INTERNAL_SERVER_ERROR)
      .send({ error: "Internal Server Error" });
  }
};

export const generateLongTest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const testId: string = req.body.testId;
    const difficulty: string = req.body.difficulty;
    const topics: string[] = req.body.topics;
    const count: number = req.body.count;

    if (
      !testId ||
      !difficulty ||
      !Array.isArray(topics) ||
      typeof count !== "number"
    ) {
      console.log("here", testId, difficulty, topics, count);
      res.status(400).send({ error: "Invalid input format" });
      return;
    }
    const longTest = await generateLongTests(
      testId,
      topics,
      difficulty as unknown as typeof QUESTION_LEVEL,
      count
    );

    res.status(STATUS_OK).send(longTest);
  } catch (error) {
    console.error(error);
    res
      .status(STATUS_INTERNAL_SERVER_ERROR)
      .send({ error: "Internal Server Error" });
  }
};
