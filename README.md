# Vue.js UI Components for Tailwind CSS - TailGrids Vue

Welcome to the Vue.js version of TailGrids. TailGrids Vue.js free core version offers a wide range of high-quality Vue.js UI components and blocks, perfect for building modern websites, landing pages, and web apps using the power of Tailwind CSS and Vue.js. With its consistent design and extensive collection of essential UI elements, TailGrids Vue provides everything you need to create stunning user interfaces in your Vue.js projects.

[![sneak-peek](https://github.com/TailGrids/tailgrids-vue/blob/main/tailgrids-vue.png)](https://tailgrids.com/components)

TailGrids Vue comes with all the necessary integration features for seamless usage of these components within your Vue.js application. Whether you're developing single-page applications, progressive web apps, or server-side rendered apps using Vue.js, feel free to use TailGrids Vue for your personal or commercial projects.

## Getting Started

**Step 1:** Install Tailwind CSS and generate the config file.

If you haven't set up Tailwind CSS in your project yet, open your command terminal and execute the following commands:

```shellscript copy
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Step #2:** Install TailGrids

Next, install TailGrids by running the following command:

```shellscript copy
npm i tailgrids
```

**Step #3:** Update the Configuration

Now, update your `tailwind.config.js` file to include the TailGrids plugin. Add the following code snippet:

```javascript showLineNumbers copy filename="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
```

**Step #4:** Add Tailwind CSS directives.

Create a CSS file named style.css in the /src directory. Then, include this code at the top of the file.

```css copy
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step #5:** Import CSS into main.js

Import the `style.css` CSS file inside your ./src/main.js file:

```javascript copy
import { createApp } from "vue";
import App from "./App.vue";

import "./style.css"; // add this

createApp(App).mount("#app");
```

```shellscript copy
npm run dev
```

That's it! Browse and start using the [TailGrids Vue component](/components/vue-link) in your Vue project.

If you want to build the project, you can run 
```shellscript copy
npm run build
```


### [🚀 Explore All Components](https://tailgrids.com/components)

### [🌏 Visit Website](https://tailgrids.com)

### [📃 Documentation](https://tailgrids.com/docs)

## 🎁 License

TailGrids Vue Core is 100% Free! and open-source you can use it with your personal or commercial projects.
