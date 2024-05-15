import OpenAI from "openai";

let openai

export default async function main(message) {
  openai ??= new OpenAI({ apiKey : process.env.OPENAI_API_KEY }); 

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Recommend me 1 color that goes well with " + message + ". Respond only with the hexadecimal code." }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}


