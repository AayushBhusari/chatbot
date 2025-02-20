# Chatbot

## Project Overview

An interactive chatbot designed to handle multi-turn conversations using the Google Generative AI library. This project demonstrates a simple, user-friendly chat interface capable of maintaining context and conversation history.

## Skills Learned

- **JavaScript:** Handling asynchronous operations, event listeners, and user interactions.
- **HTML & CSS:** Creating and styling a responsive chat interface.
- **Google Generative AI:** Integrating and utilizing a generative AI model to process and respond to user inputs.

## Technologies Used

- **HTML:** For the structure of the chatbot interface.
- **CSS:** For styling the chat interface.
- **JavaScript:** For managing user interactions and integrating the AI model.
- **Google Generative AI:** For generating intelligent responses to user inputs.

## Features

- **Multi-Turn Conversations:** Maintains context and history of the dialogue.
- **Responsive Design:** Provides a clean and user-friendly chat interface.
- **Asynchronous Messaging:** Ensures smooth and seamless user-bot interaction.

## Specifications

- **Generative Model:** Utilizes the gemini-1.5-flash model from Google Generative AI.
- **Maximum Output Tokens:** Configured to generate up to 500 tokens per response.
- **Conversation History:** Tracks and maintains an array of conversation history with roles and parts for context.
- **User Interface:** Includes a chat box, input field, and send button for user interactions.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/Chatbot.git
   cd Chatbot
   ```

2. **Install Dependencies:**

   ```bash
   npm install @google/generative-ai
   ```

3. **Add Your API Key:**

   In `script.js`, replace `your_google_generative_ai_api_key` with your actual API key.

   ```javascript
   const API_KEY = "your_google_generative_ai_api_key";
   ```

4. **Run the Project:**

   Open `index.html` in a web browser to start the chatbot interface.

## Usage

- **Start a Conversation:** Type a message in the input field and click the "Send" button or press "Enter".
- **View Responses:** The bot's responses will appear in the chat box, maintaining the conversation history.

## Code Structure

- **index.html:** The main HTML file containing the structure of the chatbot interface.
- **style.css:** The CSS file for styling the chat interface.
- **script.js:** The JavaScript file for handling user input, bot responses, and integrating the generative AI model.

## Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or report bugs.

## Live Demo

You can view a live demo of the chatbot hosted at GitHub Pages[Click Here](https://aayushbhusari.github.io/chatbot/).
