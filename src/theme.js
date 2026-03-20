import { createTheme } from '@mui/material/styles';

const sharedTypography = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  h1: { fontWeight: 800, letterSpacing: '-0.03em' },
  h2: { fontWeight: 700, letterSpacing: '-0.02em' },
  h3: { fontWeight: 700, letterSpacing: '-0.01em' },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600 },
  body1: { lineHeight: 1.7 },
  body2: { lineHeight: 1.6 },
  button: { textTransform: 'none', fontWeight: 600 },
};

const sharedComponents = (mode) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: '10px 24px',
        fontSize: '0.95rem',
      },
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.8rem',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: mode === 'dark'
          ? '0 1px 3px rgba(0,0,0,0.4)'
          : '0 1px 3px rgba(0,0,0,0.08)',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { borderRadius: 16 },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2563EB', light: '#60A5FA', dark: '#1D4ED8' },
    secondary: { main: '#7C3AED' },
    background: { default: '#FAFBFC', paper: '#FFFFFF' },
    text: { primary: '#0F172A', secondary: '#475569' },
    divider: '#E2E8F0',
  },
  typography: sharedTypography,
  components: sharedComponents('light'),
  shape: { borderRadius: 12 },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#60A5FA', light: '#93C5FD', dark: '#3B82F6' },
    secondary: { main: '#A78BFA' },
    background: { default: '#0B1120', paper: '#111827' },
    text: { primary: '#F1F5F9', secondary: '#94A3B8' },
    divider: '#1E293B',
  },
  typography: sharedTypography,
  components: sharedComponents('dark'),
  shape: { borderRadius: 12 },
});
