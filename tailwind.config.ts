import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00FF6F", // Color protagonista
          secondary: "#17252A",
          accent: "#4FC3F7",
          neutral: "#1E1E1E",
          "base-100": "#1E1E24", // Fondo oscuro
          info: "#4DD0E1",
          success: "#81C784",
          warning: "#FFB74D",
          error: "#EF5350",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
