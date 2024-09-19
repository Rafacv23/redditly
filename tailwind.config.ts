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
          primary: "#FF5700", // Color protagonista
          secondary: "#FF7043",
          accent: "#4FC3F7",
          neutral: "#1E1E1E",
          "base-100": "#121212", // Fondo oscuro
          info: "#4DD0E1",
          success: "#81C784",
          warning: "#FFB74D",
          error: "#EF5350",
        },
        light: {
          primary: "#FF5700", // Color protagonista
          secondary: "#FFB74D",
          accent: "#6EC1E4",
          neutral: "#F4F4F4",
          "base-100": "#FFFFFF", // Fondo claro
          info: "#29B6F6",
          success: "#66BB6A",
          warning: "#FFA726",
          error: "#E57373",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
