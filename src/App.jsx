import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Main } from './features/layout/components/Main'
import Props from "./features/layout/components/Props"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App