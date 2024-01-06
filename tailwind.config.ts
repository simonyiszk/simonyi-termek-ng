import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "multiple_select_0": "minmax(100px, 1fr)",
        "multiple_select_1": "minmax(100px, 1fr) repeat(1, min-content)",
        "multiple_select_2": "minmax(100px, 1fr) repeat(2, min-content)",
        "multiple_select_3": "minmax(100px, 1fr) repeat(3, min-content)",
        "multiple_select_4": "minmax(100px, 1fr) repeat(4, min-content)",
      },
      colors: {
        simonyi: {
          DEFAULT: "#63BC47",
          50: "#D5EDCE",
          100: "#C8E8BF",
          200: "#AFDDA1",
          300: "#96D283",
          400: "#7CC765",
          500: "#63BC47",
          600: "#4D9536",
          700: "#386C27",
          800: "#224218",
          900: "#0D1909",
          950: "#020502",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", ...fontFamily.sans],
        mono: ["var(--font-geist_mono)", ...fontFamily.mono],
        archivo: ["var(--font-archivo)"],
        lexend: ["var(--font-lexend)"],
        geist: ["var(--font-geist)"],
        geist_mono: ["var(--font-geist_mono)"],
      },
      fontSize: {
        h1: [
          "32px",
          {
            fontWeight: "500",
            lineHeight: "48px",
          },
        ],
        h2: [
          "24px",
          {
            fontWeight: "500",
            lineHeight: "40px",
          },
        ],
        h3: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.16px",
          },
        ],
        body: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.14px",
          },
        ],
        message: [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "12px",
            letterSpacing: "0.12px",
          },
        ],
        label: [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.12px",
          },
        ],
        input: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "17.5px",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
