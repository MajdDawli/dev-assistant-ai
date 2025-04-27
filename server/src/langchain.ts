import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const chatModel = new ChatOpenAI({
  temperature: 0.7,
  modelName: "gpt-4o-mini",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function askLLM(userInput: string): Promise<string> {
  const response = await chatModel.call([
    new SystemMessage("You are a profissional AI developer assistant."),
    new HumanMessage(userInput),
  ]);

  return response.text;
}
