import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { ChakraProvider } from '@chakra-ui/react'

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
