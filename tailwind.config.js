/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, html}"],
  theme: {
    extend: {
      colors:{
        MainWhite: 'var(--color0)',
        MainBlue: 'var(--color1)',
        SecondaryBlue: 'var(--color2)',
        GrassGreen: 'var(--color3)',
        WaterBlue: 'var(--color4)',
        LightningYellow: 'var(--color5)',
        PsychicPurple: 'var(--color6)',
        FightingBrow: 'var(--color7)',
        DarknessBlue: 'var(--color8)',
        DragonYellow: 'var(--color9)',
        ColorlessWhite: 'var(--color10)',
        FireRed: 'var(--color11)',
        MetalGray: 'var(--color12)',
        FairyPink: 'var(--color13)',
      }
    },
  },
  plugins: [],
}

