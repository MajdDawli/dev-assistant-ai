# AI Developer Assistant

A full-stack application that allows developers to ask programming-related questions and receive natural language answers powered by a Large Language Model (LLM).

---

## Tech Stack

- **Frontend:** React (TypeScript) + Vite
- **Backend:** Node.js + Express (TypeScript)
- **LLM Integration:** LangChain + OpenAI (GPT-4o-mini)
- **Containerization:** Docker + Docker Compose
- **Deployment-ready:** Runs locally or via containers

---

## Architecture Overview

```
Frontend (React + Vite) -> Backend (Express.js REST API) -> LangChain -> OpenAI API
```

- Frontend sends user input via a `POST /api/query` request.
- Backend processes the input, uses LangChain to prompt the LLM.
- The OpenAI API responds with an answer, which is sent back to the frontend.

---

## Setup Instructions

### Running Locally (Without Docker)

1. Clone the repository:

```bash
git clone https://github.com/MajdDawli/dev-assistant-ai
cd dev-assistant-ai
```

2. Set up the backend:

```bash
cd server
npm install
touch .env      #add OPENAI_API_KEY=[Your API key]
npm run dev
```

3. Set up the frontend:

```bash
cd ../client
npm install
npm run dev
```

- Frontend runs at `http://localhost:5173`
- Backend runs at `http://localhost:5000`

---

### Running with Docker Compose (Recommended)

```bash
docker-compose up --build
```

- Frontend will be available at: `http://localhost:3000`
- Backend API will be available at: `http://localhost:5000`

**To stop containers:**

```bash
docker-compose down
```

---

## Thought Process and Approach

- **Requirements analysis:** First step was understanding the need for a clean LLM-backed fullstack application. I focused on building a minimal, modular, and scalable architecture that meets real-world deployment standards.
- **Backend:** I chose Express.js with REST API patterns because it’s lightweight, flexible, and easy to containerize.
- **LLM integration:** LangChain was used to simplify interactions with OpenAI, offering easy message management and future extensibility.
- **Frontend:** Built with Vite + React (TypeScript) for extremely fast development experience and TypeScript safety.
- **Containerization:** I chose to Dockerize both frontend and backend separately, and tie them together with Docker Compose for a production-like setup.
- **Error Handling:** Backend gracefully handles API failures (e.g., no API key, quota exceeded) and the frontend handles loading and error states cleanly.
- **Flexibility:** Backend URL is separated so it can be easily adapted to production/staging later if needed.

---

## Assumptions and Simplifications

- No database integration was implemented (due to time constraints).
- All prompts are sent live to OpenAI — no caching or logging.
- Simple styling was used for frontend UI for clarity and speed; UI libraries like Tailwind or Material-UI were not integrated.
- Only one API route (`/api/query`) was created for simplicity and clarity.

---

## Potential Improvements

- Add database (PostgreSQL or SQLite) to persist queries and responses.
- Enhance frontend UX with animations and a chat-like history view.
- Add unit and integration tests for backend API and frontend components.
- Implement LangSmith or Langfuse to monitor LLM calls.
- Include better error handling and sanitize user input.


---

# Final Note

This project was designed and built with production-readiness, modularity, and real-world deployment practices in mind, aiming to simulate how a real-world LLM-powered developer tool would be architected.
