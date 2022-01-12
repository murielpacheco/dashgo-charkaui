import { AppProps } from 'next/app'
import { ChakraProvider, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

import { QueryClientProvider, QueryClient } from 'react-query'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const styles = useMultiStyleConfig('App',0)
  return (
    <StylesProvider value={styles} >
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </StylesProvider >
  )

}

export default MyApp
