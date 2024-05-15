import OpenAI from "openai";

let openai

export default async function main(message) {
  openai ??= new OpenAI({ apiKey : process.env.OPENAI_API_KEY }); 

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Recommend me 3 colors that goes well with " + message + ".Respond with a json array containing only hexadecimal strings" }],
    model: "gpt-3.5-turbo",
  });

  return JSON.parse(completion.choices[0].message.content);
}



