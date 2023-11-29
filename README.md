# Tailwind CSS Components for Vue - TailGrids Vue

## Getting Started

To start using TailGrids Vue setup a Vue.js project and install TailwindCss.
Then follwo these steps to complete the insallation.

1. Install Tailgrids

```sh
npm install tailgrids
```

2. add Tailgrids to your tailwind.config.js file

```
module.exports = {
  content: ["./*.html", "./ecommerce/*.html", "./assets/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};

```

3. Browse Components and choose the Vue codebase and copy-paste snippets you like, on your projects and keep using!

4. Run the dev server to see the changes locally

```sh
npm run dev
```

