import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import FaqPage from './pages/FaqPage'
import ContactUsPage from './pages/ContactUsPage'
import PrivacyPolicyPage from './pages/Privacy'
import RightOfWithdrawalPage from './pages/RightOfWithdrawal'
import TermsOfServicePage from './pages/TermsOfService'
import Aboutus from './pages/Aboutus'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<FaqPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/right-of-withdrawal" element={<RightOfWithdrawalPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/about-us" element={<Aboutus />} />
    </Routes>
  )
}

export default App