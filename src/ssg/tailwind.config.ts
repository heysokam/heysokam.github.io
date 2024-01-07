import type { Config } from "tailwindcss"
import { docDir } from './docusaurus.config.ts'


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Default tailwindcss setting
    `./${docDir}/**/*.{md,mdx}`,  // Add markdown content to the tailwindcss processor
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Hook into docusaurus dark mode settings
  corePlugins: { preflight: false },          // Disable preflight. It breaks docusaurus css defaults. https://tailwindcss.com/docs/preflight
  plugins: [],
  theme: {
    extend: {},
  },
} satisfies Config
