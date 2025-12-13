# BolhaDev Wiki // Architecture Documentation

## 1. Overview
BolhaDev Wiki is a satirical, brutalist-style web application designed to archive controversies ("tretas") from the Brazilian developer community. It operates in two modes:
1.  **Local/Mock Mode**: Serves static JSON data for demonstration and preservation of "classic" hits.
2.  **Live Mode**: Fetches real-time issues from a GitHub repository, treating them as wiki entries.

The application also features an AI integration ("O Arquivista") powered by Google's Gemini API to generate content or chat with users.

## 2. Technical Stack
*   **Core**: React 19 (via ESM/importmap, no bundler step required for deployment on simple static hosts).
*   **Styling**: Tailwind CSS (CDN) with a custom "Cyber-Brutalist" configuration defined in `index.html`.
*   **Icons**: Lucide React.
*   **AI**: `@google/genai` SDK (Gemini 2.5 Flash).
*   **Markdown**: `react-markdown` + `remark-gfm` for rendering wiki content.

## 3. Project Structure

### Core Components
*   **`App.tsx`**: The main Controller/Router. It manages global state (`view`, `searchTerm`, `selectedEntry`) and decides which high-level component to render.
*   **`components/Layout.tsx`**: The application shell. Wraps content with the responsive `Sidebar`.
*   **`components/Landing.tsx`**: The cinematic entry point. Handles the "boot sequence" animation.
*   **`components/TretaList.tsx`**: Logic for filtering, searching, and rendering the grid of `TretaCard`s. Decoupled from `App.tsx` for cleanliness.

### Presentation
*   **`components/TretaCard.tsx`**: Displays individual summaries. Includes hover effects (glitch/tape).
*   **`components/MarkdownRenderer.tsx`**: Custom wrapper around `react-markdown` to apply the specific neon-green/black typography to raw markdown content.
*   **`components/Sidebar.tsx`**: Navigation menu. Responsive (drawer on mobile, sidebar on desktop).

### Services & Data
*   **`services/githubService.ts`**:
    *   `fetchTretasFromGitHub()`: Calls GitHub API to get issues with label `treta`.
    *   `getStaticTretas()`: Returns the local mock data.
*   **`services/geminiService.ts`**: Interface for the AI Persona "O Arquivista".
*   **`data/tretas.ts`**: The "Local Database". A hardcoded array of `WikiEntry` objects.

## 4. Key Design Decisions (SoC)
*   **Separation of Data Source**: The app treats Local and GitHub data identically via the `WikiEntry` interface. `TretaList` doesn't care where data comes from, only that it has a `source` tag ('LOCAL' | 'GITHUB') for UI hints.
*   **Layout Abstraction**: `App.tsx` does not handle margin/padding logic. `Layout.tsx` ensures the sidebar and main content area interact correctly on mobile/desktop.
*   **CSS-in-HTML**: Tailwind config is injected in `index.html` to allow runtime configuration without a build step, fitting the "raw" aesthetic.

## 5. Setup & Configuration

### API Keys
The application requires a Google Gemini API Key. This is accessed via `process.env.API_KEY`.
*   Ensure the environment where this runs injects this variable.

### Changing the GitHub Source
To point the "Live Feed" to a different repository:
1.  Open `services/githubService.ts`.
2.  Modify `REPO_OWNER` and `REPO_NAME` constants.
3.  Ensure the target repo has Issues enabled and uses the label `treta`.

## 6. Future Improvements (Roadmap)
*   [ ] Implement pagination for GitHub issues (currently fetches first page only).
*   [ ] Add "Like" persistence (currently read-only from GitHub reactions).
*   [ ] Enhance "Archivist" persona with RAG (Retrieval-Augmented Generation) based on the current wiki content.
