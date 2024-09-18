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
          primary: "#FF5733",

          secondary: "#FF5733",

          accent: "#00ffff",

          neutral: "#B0B4B9",

          "base-100": "#0B0C10",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
        light: {
          primary: "#FF5733",

          secondary: "#fee2e2",

          accent: "#FF5700",

          neutral: "#0B0C10",

          "base-100": "#F5F5F5",

          info: "#FF5700",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
