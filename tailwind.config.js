/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Jira/Asana-style neutral slate + a focused indigo accent
        surface: { DEFAULT: "#ffffff", sunken: "#f7f8fa", raised: "#ffffff" },
        line: { DEFAULT: "#e6e8eb", strong: "#d5d8dc" },
        ink: { DEFAULT: "#172b4d", soft: "#44546f", faint: "#7a869a" },
        brand: { 50: "#eef2ff", 100: "#e0e7ff", 500: "#4f46e5", 600: "#4338ca", 700: "#3730a3" },
        status: {
          active: "#0c66e4", activebg: "#e9f2ff",
          done: "#22a06b", donebg: "#dcfff1",
          risk: "#e56910", riskbg: "#fff3eb",
          todo: "#626f86", todobg: "#f1f2f4",
          review: "#8270db", reviewbg: "#f3f0ff",
        },
        prio: { high: "#c9372c", highbg: "#ffeceb", med: "#a54800", medbg: "#fff7d6", low: "#216e4e", lowbg: "#dcfff1" },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(9,30,66,0.08), 0 0 1px rgba(9,30,66,0.10)",
        raised: "0 4px 12px -2px rgba(9,30,66,0.14)",
        pop: "0 8px 28px -6px rgba(9,30,66,0.22)",
      },
    },
  },
  plugins: [],
};
