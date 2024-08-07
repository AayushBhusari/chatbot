import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAHyOmTLQ-YnKqHLAn1jJ9R9eoql8qP6p4";
const genAI = new GoogleGenerativeAI(API_KEY);

// Initialize the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Maintain the conversation history
let conversationHistory = [];

// Function to update the chat box with messages
const updateChatBox = (sender, message) => {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.className = sender;
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
};

// Function to handle user input
const getUserInput = () => {
  let userInput = document.getElementById("userInput").value;
  if (userInput === "") {
    alert("Please input something ......");
  } else {
    updateChatBox("user", userInput);
    getBotResponse(userInput);
    document.getElementById("userInput").value = "";
  }
};

// Function to get bot response
const getBotResponse = async (userInput) => {
  conversationHistory.push({ role: "user", parts: [{ text: userInput }] });

  const chat = model.startChat({
    history: conversationHistory,
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  const result = await chat.sendMessage(userInput);
  const response = await result.response;
  const text = response.parts.map((part) => part.text).join(" ");
  updateChatBox("bot", text);

  conversationHistory.push({ role: "model", parts: [{ text: text }] });
};

// Add Event Listener
document.getElementById("sendButton").addEventListener("click", getUserInput);
document.getElementById("userInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getUserInput();
  }
});
