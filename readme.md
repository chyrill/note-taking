# Note Taking API

This project is a simple RESTful API for note-taking, built with Express.js and TypeScript. It allows users to create, read, update, and delete notes.

## Features

- Create notes
- Retrieve all notes
- Retrieve a single note by ID
- Update a note by ID
- Delete a note by ID

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/chyrill/note-taking.git
   cd note-taking
   ```
2. install required dependecies
    ```bash
    npm install
    ```
3. Start development server
    ```bash
    npm run dev
    ```

server is hosted on http://localhost:3000

### API Endpoints
 * POST `/api/notes`
 body:
 ```json
    {      
        "title": "Title",
        "content": "content of the note."
    }
 ```
 - title and content are required fields
  * PUT `/api/notes/:id`
 body:
 ```json
    {      
        "title": "update itle",
        "content": "Update content of the note."
    }
 ```
 - title and content are required fields

   * GET `/api/notes/:id`
   * DELETE `/api/notes/:id`
   * GET `/api/notes` list all notes
