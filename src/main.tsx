import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PresentationSlideshow from './PresentationSlideshow.tsx'
import TechnicalDeepDive from './components/TechnicalDeepDive.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PresentationSlideshow />} />
        <Route path="/technical-deep-dive" element={<TechnicalDeepDive />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
