import '../styles/globals.css'
import type { AppProps } from 'next/app'
import{SessionProvider} from 'next-auth/react'
import Header from '../components/Header'
import {ApolloProvider} from "@apollo/client"
import client from "../apollo-client"
function MyApp({ Component, pageProps:{session ,...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
    <div className="h-screen bg-slate-200"> {/* overflow-y-scroll -> not given by me */}
    <Header  />
< Component {...pageProps}/>
    </div>
  </SessionProvider>  
    </ApolloProvider>
  )
  
}

export default MyApp
