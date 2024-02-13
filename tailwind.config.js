/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        signupBg: 'url("/images/signupImage.jpg")',
        loginBg: "url('/images/login-bg.png')",
        starsBg: "url('/images/Stars.png')",
        customGradient:
          "linear-gradient(45deg, rgba(127, 86, 217, 0.8),rgba(66, 48, 125, 0.8))",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        buttonColor: "rgba(39, 119, 155, 1)",
        primaryPurple: "rgba(127, 86, 217, 1)",
        fontColor: "rgba(52, 64, 84, 1)",
        headingText: "rgba(16, 24, 40, 1)",
        customGray500: "rgba(102, 112, 133, 1)",
        customGray300: "rgba(208, 213, 221, 1)",
        customGray600: "rgba(71, 84, 103, 1)",
        customGray400: "rgba(152, 162, 179, 1)",
        customGray200: "rgba(234, 236, 240, 1)",
        activeGreen: "rgba(68, 188, 95, 0.21)",
        inactiveYellow: "rgba(255, 250, 235, 1)",
        inactiveRed: "rgba(182, 17, 47, 1)",
        activeGreenText: "rgba(4, 155, 119, 1)",
        warningText: "rgba(181, 71, 8, 1)",
      },
    },
  },
  plugins: [],
};
