# Mike Deng's Portfolio (Undertale Edition)

A personal portfolio website reimagined with a retro **Undertale** aesthetic. Built with modern web technologies, this site combines nostalgic pixel art vibes with smooth, responsive performance.

## 🌟 Features

- **Undertale Theme**: Authentic UI elements including dialog boxes, the "determination" heart cursor, and battle interfaces.
- **Interactive Battle Menu**: Navigate through the site (Projects, About, Resume, Contact) using a gamified menu system.
- **Inventory System**: View projects as items in an RPG inventory with detailed inspection views.
- **Dynamic Animations**: Custom typewriter effects, soul trait animations, and a starry background.
- **Pixel Perfect**: Integrated `VT323` and `Press Start 2P` fonts for that authentic 8-bit look.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (Static Export)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/products/hosting)

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📦 Deployment

This site uses **GitHub Actions → GitHub Pages**.

- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Trigger: push to `main` (or manual **Run workflow**)
- Live URL: https://supamike2323.github.io/mike-website/

### First-time setup

1. Repo **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**
2. Push to `main` (or run the workflow manually)
3. Wait for the **Deploy to GitHub Pages** workflow to finish

### Local production build

```bash
npm run build
```

Static files are written to `out/` (also used by Firebase Hosting if you deploy there manually).

## 🎨 Asset Credits

- **Fonts**: 'Press Start 2P' and 'VT323' from Google Fonts.
- **Inspiration**: Toby Fox's *Undertale*.
