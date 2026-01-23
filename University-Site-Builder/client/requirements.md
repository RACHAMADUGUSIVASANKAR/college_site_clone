## Packages
framer-motion | Complex page transitions and scroll animations
recharts | Dashboard analytics charts for attendance and performance
countup.js | Number counter animations for achievements (or implement via framer-motion)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["Poppins", "sans-serif"],
  body: ["Inter", "sans-serif"],
}
Tailwind Config - extend colors:
colors: {
  brand: {
    DEFAULT: "#FF6A00",
    50: "#FFF1E6",
    100: "#FFE4CC",
    200: "#FFC999",
    300: "#FFAD66",
    400: "#FF9233",
    500: "#FF6A00",
    600: "#CC5500",
    700: "#994000",
    800: "#662A00",
    900: "#331500",
  }
}
Auth endpoints /api/auth/* are session-based with httpOnly cookies.
Dashboard data endpoints are role-protected on the backend.
