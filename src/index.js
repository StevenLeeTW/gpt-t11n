//import axios from 'axios'

// const { Configuration, OpenAIApi } = require("openai");
import { Configuration,OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "Hello world"}],
});
console.log(completion.data.choices[0].message);


//   // Replace 'YOUR_API_KEY' with your actual API key from OpenAI
//   const apiKey = process.env.OPEN_API_KEY

//   // Text and target language for translation
//   const textToTranslate = 'Hello, how are you?'
//   const targetLanguage = 'Spanish'

//   async function translateText() {
//     try {
//       const apiUrl = 'https://api.openai.com/v1/chat/completions'

  
//       const data = {
//         model: 'gpt-3.5-turbo-base',
//         messages: [
//             {
//               role: "system",
//               content: "You are a professioanl and localize guy."
//             },
//             {
//               role: "user",
//               content: `Translate the following text to ${targetLanguage}: ${textToTranslate}`
//             }
//           ],
//       }
  
//       const headers = {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${apiKey}`,
//       }
  
//       const response = await axios.post(apiUrl, data, { headers })
  
//       if (response.status === 200) {
//         const translation = response.data.choices[0].text.trim()
//         return translation
//       } else {
//         throw new Error('Translation failed. Check your API key and parameters.')
//       }
//     } catch (error) {
//     console.log(error)
//       throw new Error(`Error: ${error}`)
//     }
//   }
  
//   translateText()
//     .then((translatedText) => {
//       console.log(`Original Text: ${textToTranslate}`)
//       console.log(`Translated Text (${targetLanguage}): ${translatedText}`)
//     })
//     .catch((error) => {
//       console.error(error.message)
//     })
  
//   translateText()
  

