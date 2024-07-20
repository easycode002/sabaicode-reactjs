import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/organisms/layout/MainLayout'
import MarqueeAnimationPage from './pages/animation-marquee/MarqueeAnimationPage'
import SkeletonPage from './pages/SkeletonPage/SkeletonPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path='animation-marquee' element={<MarqueeAnimationPage/>}/>
                <Route path='skeleton' element={<SkeletonPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App