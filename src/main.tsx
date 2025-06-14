import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PresentationSlideshow from './PresentationSlideshow.tsx'
import TechnicalDeepDive from './components/TechnicalDeepDive.tsx'
import InteractiveScenario from './components/InteractiveScenario.tsx'
import ConceptualOnePager from './components/ConceptualOnePager.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/presentation-demo">
      <Routes>
        <Route path="/" element={<PresentationSlideshow />} />
        <Route path="/technical-deep-dive" element={<TechnicalDeepDive />} />
        <Route path="/interactive-scenario" element={<InteractiveScenario />} />
        <Route path="/conceptual-one-pager" element={<ConceptualOnePager />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
