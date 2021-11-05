import 'tailwindcss/tailwind.css'
import { DataProvider } from '../store/GlobalState'

import Notify from '../src/components/Notify'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps}>
        <Notify />
      </Component>
    </DataProvider>
  )
}


export default MyApp
