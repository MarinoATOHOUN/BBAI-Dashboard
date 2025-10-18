# BlackBenAI Admin Dashboard

This project is a complete web application for the "BlackBenAI Admin Dashboard" — a professional dashboard for the internal and administrative management of the African startup BlackBenAI.

This README provides instructions for setting up and running the frontend portion of the application.

## Project Overview

BlackBenAI is an African technology company dedicated to creating artificial intelligence models rooted in local realities. This dashboard is an internal tool for managing employees, documents, projects, and finances.

The visual identity reflects BlackBenAI: a dark background, elegant interface, and a sober, futuristic technological atmosphere.

## Architecture

*   **Frontend**: Next.js (with React), TypeScript, Tailwind CSS
*   **Backend**: The original proposal specifies a Django REST Framework backend. This starter focuses on the Next.js frontend. All backend data is currently mocked.
*   **UI Components**: Built with [shadcn/ui](https://ui.shadcn.com/).
*   **AI Features**: Integrated with Google's Genkit for AI-powered insights.

## Features

*   **Authentication**: Login page and protected routes.
*   **Dashboard**: A global view with key statistics and AI-generated insights.
*   **Employee Management**: CRUD interface for employee records.
*   **Project Tracking**: Monitor the status and members of internal projects.
*   **Document Management**: UI for managing secure files.
*   **Announcements**: An internal news feed.
*   **Financials**: Visualization of financial data with charts.
*   **User Profile**: A dedicated space for user information.

## Frontend Setup (Next.js)

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation

1.  Navigate to the project root directory.
2.  Install the required npm packages:
    ```bash
    npm install
    ```

### Environment Variables

The project uses Genkit for its AI capabilities, which requires a Google AI API key.

1.  Create a `.env` file in the root of the project.
2.  Add your Google AI API key to the `.env` file:
    ```
    GOOGLE_API_KEY=your_google_ai_api_key_here
    ```

### Running the Development Server

To run the frontend application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

The Genkit AI flows can be tested using the Genkit developer UI:

```bash
npm run genkit:dev
```

This will start the Genkit developer UI, typically on `http://localhost:4000`.

### Building for Production

To create a production build of the frontend:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

## Security Guidance

*   **Environment Variables**: All sensitive keys, such as the `GOOGLE_API_KEY`, must be stored in the `.env` file. This file is included in `.gitignore` and should never be committed to version control.
*   **Backend Security**: When implementing the backend, ensure that:
    *   CORS is correctly configured to only allow requests from the frontend domain.
    *   File uploads are handled securely, and encryption keys (like a Fernet key) are stored as environment variables.
    *   Role-based access control is strictly enforced on all API endpoints.
