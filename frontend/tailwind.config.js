/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          purple: {
            400: "#9F7AEA",
            600: "#7C3AED",
            900: "#4C1D95",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        animation: {
          "fade-in-down": "fade-in-down 0.5s ease-out",
          "fade-in-up": "fade-in-up 0.5s ease-out",
        },
        keyframes: {
          "fade-in-down": {
            "0%": {
              opacity: "0",
              transform: "translateY(-10px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          "fade-in-up": {
            "0%": {
              opacity: "0",
              transform: "translateY(10px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  