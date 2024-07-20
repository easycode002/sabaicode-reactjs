import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/organisms/layout/MainLayout'
import MarqueeAnimationPage from './pages/animation-marquee/MarqueeAnimationPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path='animation-marquee' element={<MarqueeAnimationPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
