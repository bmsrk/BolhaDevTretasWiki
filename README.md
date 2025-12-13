<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BolhaDev Wiki

A satirical, brutalist-style web application designed to archive controversies ("tretas") from the Brazilian developer community.

🌐 **Live Demo:** [https://bmsrk.github.io/BolhaDevTretasWiki/](https://bmsrk.github.io/BolhaDevTretasWiki/)

View your app in AI Studio: https://ai.studio/apps/drive/1g3NffPFnTjalGSTAOakfoMHrRbI3BfjH

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

The application is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

### GitHub Pages Setup

To enable GitHub Pages deployment for this repository:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy the `dist` folder on every push to `main`

### Manual Deployment

You can also trigger a manual deployment from the **Actions** tab by running the "Deploy to GitHub Pages" workflow.
