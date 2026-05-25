import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // não usado no v1 (light only), reservado pro futuro
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // DESIGN_SYSTEM §3.1 — Altara purple/violet
        altara: {
          50: '#F4F1FE',
          100: '#E8E3FD',
          200: '#D2C9FB',
          500: '#7B6BE8',
          600: '#5B47E8',
          700: '#4B38C7',
        },
        // DESIGN_SYSTEM §3.2 — Preto + neutros warm
        ink: {
          DEFAULT: '#0A0A0A', // CTA primário (preto sólido)
          soft: '#2A2A2A', // hover do CTA preto
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFAF7', // ★ background da página
          100: '#F5F4F0',
          200: '#EAE8E2',
          300: '#D8D5CD',
          500: '#78766F',
          700: '#3F3D38',
          900: '#18181B',
        },
        // DESIGN_SYSTEM §3.3 — Tags pastéis quentes (Section-style)
        tag: {
          'pink-bg': '#FCD3D6',
          'pink-fg': '#8B2B3A',
          'peach-bg': '#FBE0CC',
          'peach-fg': '#8C4E1F',
          'mint-bg': '#D9E8DC',
          'mint-fg': '#2D5C3A',
          'lavender-bg': '#E5DDF5',
          'lavender-fg': '#51388A',
          'butter-bg': '#FBF1CB',
          'butter-fg': '#7A5A12',
        },
        // DESIGN_SYSTEM §3.4 — Semânticas funcionais
        success: '#16A34A',
        warning: '#D97706',
        danger: '#DC2626',
        info: '#0284C7',
        // DESIGN_SYSTEM §3.5 — Medalhas top 3 leaderboard
        medal: {
          1: '#C9A227',
          2: '#8A8A8A',
          3: '#A06030',
        },
      },
      fontFamily: {
        // DESIGN_SYSTEM §4.1 — Satoshi via Fontshare é a fonte principal
        sans: [
          'Satoshi',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // DESIGN_SYSTEM §4.2 — Escala tipográfica
        'display-lg': [
          '48px',
          { lineHeight: '56px', letterSpacing: '-0.03em', fontWeight: '500' },
        ],
        h1: ['40px', { lineHeight: '48px', letterSpacing: '-0.025em', fontWeight: '500' }],
        h2: ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '500' }],
        h3: ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        body: ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600' }],
        micro: ['11px', { lineHeight: '14px', letterSpacing: '0.12em', fontWeight: '700' }],
      },
      borderRadius: {
        // DESIGN_SYSTEM §6.3
        sm: '6px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        full: '9999px',
      },
      boxShadow: {
        // DESIGN_SYSTEM §6.4
        sm: '0 1px 2px rgba(0,0,0,0.04)',
        DEFAULT: '0 4px 8px rgba(0,0,0,0.06)',
        lg: '0 16px 48px rgba(91, 71, 232, 0.12)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
