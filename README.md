# Sri Speech & Hearing Aid Centre Website

A professional, high-performance website for **Sri Speech & Hearing Aid Centre**, built with **SvelteKit** and **Tailwind CSS**.

## 🚀 Live Site

[https://anshumsrivastava.github.io/Sri-Speech/](https://anshumsrivastava.github.io/Sri-Speech/)

---

## ✨ Features

- **Responsive Design**: Optimized for all devices, from mobile to desktop.
- **Service Listings**: Detailed pages for Hearing Aids, Speech Therapy (Children & Adults), and Hearing Loss diagnostics.
- **Resource Center**: A health library with articles and FAQ sections.
- **Appointment Booking**: Integrated booking flow for easy scheduling.
- **SEO Optimized**: Meta tags and structured data for better visibility.
- **Fast Performance**: Static site generation (SSG) for near-instant load times.

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/) (where applicable)

---

## 💻 Local Development

1. **Clone the repository**:

   ```bash
   git clone git@github.com:AnshumSrivastava/Sri-Speech.git
   cd Sri-Speech
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Visit the app**: Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building & Deployment

### Building for Production

To create a static production build:

```bash
npm run build
```

### Deploying to GitHub Pages

This project uses `@sveltejs/adapter-static` and the `gh-pages` package for easy deployment.

To deploy the latest changes:

```bash
npm run deploy
```

For more detailed deployment instructions, see the [Deployment Guide](DEPLOYMENT_GUIDE.md).

---

## 📂 Project Structure

- `src/routes/`: Contains the pages and routing logic.
- `src/lib/`: Reusable components and library code.
- `static/`: Static assets like images and favicons.
- `svelte.config.js`: SvelteKit configuration (including GitHub Pages base path).
