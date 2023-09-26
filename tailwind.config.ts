import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        njblue: {
          100: '#EDEFF9',
          200: '#CCCFEA',
          500: '#5C64A6',
          700: '#212C7E'
        },
        neon: {
          100: '#fdfdeb',
          500: '#E1FD2C'
        },
        gray: {
          100: '#F6F6FB'
        }
      },
    },
  },
  plugins: [],
}
export default config
