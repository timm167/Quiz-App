# Quiz App

## Description
Quiz App is a web application that allows users to test their knowledge on various topics. Users can select a topic and difficulty level, answer a series of questions, and then receive a score at the end. The app allows you to review your answers at the end.

The questions are from OPENTDB API

### Link
Access at: https://timm167.github.io/Quiz-App/

## Tech Stack

### Languages
- HTML
- CSS
- JavaScript

### Libraries
- React

### Additional Tools
- Git/GitHub
- Vite React
- OPENTDB

## Project Structure
```plaintext
quiz-app/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── Components/
│   │   ├── Components.css
│   │   ├── Topic.jsx
│   │   ├── Welcome.jsx
│   │   ├── EndScreen.jsx
│   │   ├── MyForm.jsx
│   │   ├── Questions.jsx
│   │   ├── Review.jsx
│   ├── content/
│   │   ├── backupData.json
│   │   ├── config.json
│   │   ├── content.json
│   │   ├── loadContent.js
│   │   ├── magicReplace.json
│   ├── index.css
│   ├── main.jsx
│   ├── utils/
│   │   ├── backup.js
│   │   ├── convertText.js
│   │   ├── createQuizData.js
│   │   ├── endMessage.js
│   │   ├── fetchQuiz.js
│   │   ├── handleNav.js
├── vite.config.js
```

## Components

### `App.jsx`
The main component that manages the state and renders other components based on the current screen.

### `Components/`
- **`Components.css`**: Contains the styles for the components.
- **`MyForm.jsx`**: Allows users to select a topic and difficulty level.
- **`Questions.jsx`**: Renders the quiz questions and handles navigation between them.
- **`EndScreen.jsx`**: Displays the final score and provides options to review answers or play again.
- **`Review.jsx`**: Displays a review of the answers after the quiz is completed.
- **`Topic.jsx`**: Displays the difficulty and topic
- **`Welcome.jsx`**: Displays the instructions for the game

### `utils/`
- **`backup.js`**: Contains utility functions for picking a random category.
- **`convertText.js`**: Contains utility function for editing the text data received from the API.
- **`createQuizData.js`**: Contains utility functions for creating quiz data.
- **`endMessage.js`**: Contains utility functions for selecting end message.
- **`fetchQuiz.js`**: Contains utility functions for fetching from API.
- **`handleNav.js`**: Contains utility functions for navigating quiz.


### `content/`
- **`backupData.json`**: Contains backup data in case of failed API call
- **`config.json`**: Contains base URL
- **`content.json`**: Contains content like title, nav names, etc 
- **`loadContent.js`**: Sends function to send to index.HTML
- **`magicReplace.json`**: Replaces magic numbers

### Externally Written Code
- The HTML boilerplate in index.html is from Vite.
- The main rendering logic in main.jsx is also from Vite.

## License
This project is licensed under the MIT License.



