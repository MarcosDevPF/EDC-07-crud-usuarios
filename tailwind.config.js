/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#e6f2f7",
                    100: "#b0d6e5",
                    200: "#8ac2d9",
                    300: "#54a6c7",
                    400: "#3395bd",
                    500: "#007aac",
                    600: "#006f9d",
                    700: "#00577a",
                    800: "#00435f",
                    900: "#003348",
                },
                warning: {
                    100: "#FEF8CC",
                    200: "#FDEE9A",
                    300: "#FBE267",
                    400: "#F8D441",
                    500: "#F4C004",
                    600: "#D1A002",
                    700: "#AF8202",
                    800: "#8D6501",
                    900: "#755100",
                },
                danger: {
                    100: "#FEE2E2",
                    200: "#FECACA",
                    300: "#FCA5A5",
                    400: "#F87171",
                    500: "#EF4444",
                    600: "#DC2626",
                    700: "#B91C1C",
                    800: "#991B1B",
                    900: "#7F1D1D",
                },
                gray: {
                    100: "#E4E6EB",
                    200: "#C4C7CD",
                    300: "#B0B3B8",
                    400: "#7A7D82",
                    500: "#3A3B3C",
                    600: "#2E2F30",
                    700: "#242526",
                    800: "#1A1B1C",
                    900: "#18191A",
                    950: "#0D0D0E",
                },
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
    },
    plugins: [],
    darkMode: ["class"],
};
