/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-body": "rgb(222, 225, 230)",
        "custom-indigo": "rgb(27, 35, 61)",
      },
      textColor: {
        "custom-indigo": "rgb(27, 35, 61)",
        "small-txt": "rgb(20, 20, 20)",
      },
    },
  },
  plugins: [],
};
