import { GlobalStyle } from "./styles/globalStyle"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Differentials } from "./components/differentials"
import { Portfolio } from "./components/portfolio"
import { About } from "./components/about"
import { Testimonials } from "./components/testimonials"

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Services />
    <Differentials />
    <Portfolio />
    <About />
    <Testimonials />
    </>
  )
}

export default App