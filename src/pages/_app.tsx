import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import  Header  from '../ui/components/Head/Head';
import AdminHeader from '../ui/components/AdminHeader/AdminHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <AdminHeader />
      <Component {...pageProps} />
    </ThemeProvider> 
  )
}

export default MyApp
