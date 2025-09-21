export const colors = {
  primary400: '#00bcff',
  primary500: '#00a6f4',
  primary600: '#0088d1',
  primary900: '#002f4a',
  primary950: '#001f33',
  white: '#ffffff',
  black: '#000000',
  gray100: '#f7fafc',
  gray200: '#ebebeb',
  gray300: '#a9a9a9',
  text: '#333',
  red500: '#e53e3e',
};

export const gradients = {
  primaryButton: {
    colors: [colors.primary400, colors.primary600],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
  background: {
    colors: [colors.primary950, colors.primary900],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
};

export const fontSizes = {
  title: 28,
  large: 20,
  medium: 16,
  small: 14,
};

export const fonts = {
  body: 'Poppins_400Regular',
  heading: 'Poppins_700Bold',
};