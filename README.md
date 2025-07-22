# Minimal SaaS Landing Page

## Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   cd minimal-saas-landing
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Customization

### Change Colors/Fonts
- Edit `tailwind.config.ts` to customize theme colors and fonts.
- Example:
  ```js
  // tailwind.config.ts
  theme: {
    extend: {
      colors: { /* ... */ },
      fontFamily: { /* ... */ },
    },
  }
  ```

### Replace Images
- Place your images in the `/public` directory.
- Update image imports in components (e.g., `src/components/sections/Hero.tsx`).
- Use only free/commercial-use images (e.g., Unsplash).

## Deployment

### Vercel
1. Push your code to GitHub.
2. Import the repo in [Vercel](https://vercel.com/).
3. Follow the prompts to deploy.

### Netlify
1. Push your code to GitHub.
2. Import the repo in [Netlify](https://netlify.com/).
3. Follow the prompts to deploy.

## Credits
- Icons from [Lucide](https://lucide.dev/) and [Feather Icons](https://feathericons.com/)
- Images from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## License
See `LICENSE.txt` for details.
