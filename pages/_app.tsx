import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const MyApp: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
