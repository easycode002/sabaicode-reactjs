import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './components/organisms/layout/LayoutPage';
import LabelPage from './pages/AtomicPage/LabelPage';
import InputPage from './pages/AtomicPage/InputPage';

const App:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutPage/>}>
                <Route path='label' element={<LabelPage/>}/>
                <Route path='input' element={<InputPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
