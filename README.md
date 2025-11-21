# Image Caption Generator with Google Gemini

An accessible web application that generates descriptive captions for images using Google's **Gemini 2.0 Flash** AI model, specifically designed to help visually impaired users better experience visual content on the web.

## 🤖 AI Model & SDK

This project leverages:
- **Google Gemini 2.0 Flash** - A state-of-the-art multimodal AI model capable of understanding and analyzing images to generate accurate, contextual descriptions
- **@google/generative-ai SDK (v0.2.1)** - Official Google Generative AI JavaScript SDK for seamless integration with Gemini models

## 🔊 Text-to-Speech

The text-to-speech functionality uses the **native Web Speech API** (`SpeechSynthesisUtterance`), built directly into modern browsers. This means:
- ✅ No external TTS API required (not using Gemini API for speech)
- ✅ No additional costs or API quotas for speech synthesis
- ✅ Works offline once the page is loaded
- ✅ Available in all modern browsers (Chrome, Firefox, Safari, Edge)

## Features

- 📸 **Image Upload & Preview** - Upload images and see a live preview
- 🤖 **AI-Powered Captions** - Generate descriptive captions using Google Gemini 2.0 Flash
- 🔊 **Text-to-Speech** - Listen to captions with built-in speech synthesis
- ♿ **Accessibility First** - Built with visually impaired users in mind
- 🎨 **Clean UI** - Simple, intuitive Bootstrap interface

## Tech Stack

### Frontend
- HTML5
- **CSS3 with Custom Styling**
  - Bootstrap 5.3 for responsive grid system
  - Custom CSS with gradient backgrounds and modern card designs
  - Font Awesome 6.4 icons for visual elements
  - Smooth animations and hover effects
  - Glass-morphism and shadow effects for depth
- Vanilla JavaScript
- Axios for API calls
- **Web Speech API (Native Browser TTS)** - `SpeechSynthesisUtterance` for text-to-speech, no external API needed

### Backend
- Node.js
- Express.js
- **Google Generative AI SDK** (@google/generative-ai)
  - **Model: Gemini 2.0 Flash** - Advanced multimodal AI for image understanding
- Multer for file uploads
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brbousnguar/image-caption-gemeni.git
   cd image-caption-gemeni
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```
   API_KEY=your_gemini_api_key_here
   PORT=3000
   ```

## Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   node server.js
   ```
   The server will run on `http://localhost:3000`

2. **Open the frontend**
   
   Open `frontend/index.html` in your browser, or serve it using a local server:
   ```bash
   npx http-server ./frontend
   ```
   Then navigate to `http://localhost:8080`

## Usage

1. Click "Choose File" to select an image
2. Preview your image
3. Click "Get Caption" to generate an AI description
4. Use the "Speak" button to hear the caption read aloud

## API Endpoints

### `GET /`
Welcome endpoint to verify the API is running.

### `POST /caption-image`
Generates a caption for an uploaded image.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `file` (image file)

**Response:**
- Success: Plain text caption
- Error: 500 with error message

## Project Structure

```
image-caption-gemeni/
├── backend/
│   ├── server.js          # Express server & API endpoints
│   ├── package.json       # Backend dependencies
│   ├── .env              # Environment variables (not in repo)
│   └── uploads/          # Temporary image storage
├── frontend/
│   ├── index.html        # Main UI
│   └── script.js         # Frontend logic
├── LICENSE
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

- [@brbousnguar](https://github.com/brbousnguar) - b.bousnguar@gmail.com

## License

This project is licensed under the terms specified in the LICENSE file.

## Acknowledgments

Based on the LinkedIn Learning course "Build an Image Captioning Tool for Visually Impaired Users with Gemini" by Fikayo Adepoju.
