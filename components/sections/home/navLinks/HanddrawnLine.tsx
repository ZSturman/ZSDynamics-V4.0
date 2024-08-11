import { useTheme } from "@/context/themeContext"

const HandDrawnLine = () => {
    const { theme } =useTheme()

return (
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 534 534"
    width="80"
    height="30"
  >
    <path
      stroke={theme === "dark" ? "#fff" : "#000"}
      d="m66 245 27 21c5 4 15 5 21 4l3-1c12 1 22-4 33-9s21-4 32 0c9 4 18 5 28 6l15 5c8 2 14 6 21 9 10 4 21 8 32 6 12-1 24-4 34-10l26-14c5-3 11-4 16-5 11-3 19 1 27 6 5 3 11 5 17 6l26 4c22 2 42-2 62-9l30-9 2-1-1 3-5 2-39 14c-10 3-21 6-32 6h-19c-11 0-21-3-31-6-7-1-13-5-20-8-9-5-20-4-29 1l-27 15c-7 4-15 6-23 9l-16 3-15-2c-6-1-12-4-17-6l-31-12-4-1c-10 0-20-2-30-6-8-4-17-4-26 0l-27 9c-5 1-10 3-15 1s-11 0-16-2l-13-8c-7-7-14-13-23-17-8-4-22-2-29 4l-9 5c-1 1-3-1-5-1l2-5c7-4 13-8 20-10 5-2 12-1 18-1l10 4Z"
      strokeWidth="25"
      transform={`translate(0, -200), scale(1.2, 1)`}
    />
  </svg>
)}

export default HandDrawnLine;
