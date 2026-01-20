export const lightTheme = {
  colors: {
    primary: '#1a5276',
    primaryLight: '#2874a6',
    primaryDark: '#154568',
    secondary: '#ff9933',
    secondaryLight: '#ffa726',
    secondaryDark: '#fb8c00',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
  fonts: {
    display: "'Poppins', sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
};

export const darkTheme = {
  colors: {
    primary: '#3498db',
    primaryLight: '#5dade2',
    primaryDark: '#2874a6',
    secondary: '#ff9933',
    secondaryLight: '#ffa726',
    secondaryDark: '#fb8c00',
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#f8f9fa',
    textSecondary: '#adb5bd',
    border: '#495057',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
  fonts: {
    display: "'Poppins', sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
};

export type Theme = typeof lightTheme;
