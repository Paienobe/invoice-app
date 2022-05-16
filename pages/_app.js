import Layout from '../components/Layout'
import { AppProvider } from '../context/globalContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
