import { GlobalStyle } from "./styles/globalStyle"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Services />
    </>
  )
}

export default App