module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brown":{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:'#967259',
          900:"#634832"

        }
      },
      boxShadow:{
        "shadow-normal":" 0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      "borderRadius":{
        "4x1":"2rem"
      },
      fontFamily: {
        'Dana': ['Dana', 'sans-serif'], // تعریف فونت Dana
        'DanaMedium': ['Dana Medium', 'sans-serif'], // فونت متوسط
        'DemiBold': ['Dana Bold', 'sans-serif'], // فونت بولد
        'Morabba-Bold': ['Morabba Bold', 'sans-serif'], // دیگر فونت‌ها
        'Morabba-Light': ['Morabba Light', 'sans-serif'],
        'Morabba-Medium': ['Morabba Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
