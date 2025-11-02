import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#203C90",        // deep blue
        "brand-dark": "#4F75B8", // mid blue
        "brand-light": "#30C0E2" // light accent
      }
    }
  },
  plugins: []
} satisfies Config;
