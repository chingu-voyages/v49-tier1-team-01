import OpenAI from "openai";

let openai;

export default function getOpenAI() {
  openai ??= new OpenAI({ apiKey : process.env.OPENAI_API_KEY }); 
  return openai
}