module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4x1": "2rem",
      },
      fontFamily: {
        Dana: ["Dana", "sans-serif"],
        DanaMedium: ["Dana Medium", "sans-serif"],
        DemiBold: ["Dana Bold", "sans-serif"],
        "Morabba-Bold": ["Morabba Bold", "sans-serif"],
        "Morabba-Light": ["Morabba Light", "sans-serif"],
        "Morabba-Medium": ["Morabba Medium", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      screens: {
        xs:"480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        desktop: "url('../public/img/header-bg/headerBgDesktop.png')",
        mobile: "url('../public/img/header-bg/headerBgMobile.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
