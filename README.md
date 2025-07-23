# Spritz Society Clone

A modern, responsive React web app inspired by Spritz Society, built with Vite and Tailwind CSS.

## Features

- Modern React (with hooks)
- Vite for fast development
- Tailwind CSS for styling
- Modular, scalable project structure
- Mock product data and pages
- Responsive design

## Project Structure

```
spritz-society-clone/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── assets/
    │   └── images/
    │       └── logo.svg
    ├── components/
    │   ├── common/
    │   │   └── Footer.jsx
    │   ├── layout/
    │   │   └── Navbar.jsx
    │   └── home/
    │       ├── Hero.jsx
    │       └── FeaturedProducts.jsx
    ├── data/
    │   └── productData.js
    ├── hooks/
    │   └── useScrollLock.js
    ├── pages/
    │   ├── AboutPage.jsx
    │   ├── HomePage.jsx
    │   ├── LoginPage.jsx
    │   ├── ProductDetailPage.jsx
    │   └── ProductsPage.jsx
    ├── styles/
    │   └── index.css
    ├── App.jsx
    └── main.jsx
```

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev
```

### 3. Open in your browser

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- Edit product data in `src/data/productData.js`.
- Add or modify components in `src/components/`.
- Update global styles in `src/styles/index.css`.
- Replace the logo in `src/assets/images/logo.svg`.

## Build for Production

```
npm run build
```

The output will be in the `dist/` folder.

## License

MIT
