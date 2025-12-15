# BolhaDev Wiki // Architecture Documentation

## 1. Overview
BolhaDev Wiki is a satirical, brutalist-style web application designed to archive controversies ("tretas") from the Brazilian developer community. It operates in two modes:
1.  **Local/Mock Mode**: Serves static JSON data for demonstration and preservation of "classic" hits.
2.  **Live Mode**: Fetches real-time issues from a GitHub repository, treating them as wiki entries.

## 2. Technical Stack
*   **Core**: React 19 with Vite build tool.
*   **Styling**: Tailwind CSS with a custom "Cyber-Brutalist" configuration.
*   **Icons**: Lucide React.
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
    *   `fetchTretasFromGitHub()`: Calls GitHub API to get all open issues (excludes pull requests) and their comments.
    *   `getStaticTretas()`: Returns the local mock data.
*   **`data/tretas.ts`**: The "Local Database". A hardcoded array of `WikiEntry` objects.

## 4. Key Design Decisions (SoC)
*   **Separation of Data Source**: The app treats Local and GitHub data identically via the `WikiEntry` interface. `TretaList` doesn't care where data comes from, only that it has a `source` tag ('LOCAL' | 'GITHUB') for UI hints.
*   **Layout Abstraction**: `App.tsx` does not handle margin/padding logic. `Layout.tsx` ensures the sidebar and main content area interact correctly on mobile/desktop.

## 5. Setup & Configuration

### Changing the GitHub Source
To point the "Live Feed" to a different repository:
1.  Open `services/githubService.ts`.
2.  Modify `REPO_OWNER` and `REPO_NAME` constants.
3.  Ensure the target repo has Issues enabled.

## 6. Future Improvements (Roadmap)
*   [ ] Implement pagination for GitHub issues (currently fetches first page only).
*   [ ] Add "Like" persistence (currently read-only from GitHub reactions).
