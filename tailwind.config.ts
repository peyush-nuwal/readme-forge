import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // ✅ ES import

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography], // ✅ use the imported plugin
};

export default config;
