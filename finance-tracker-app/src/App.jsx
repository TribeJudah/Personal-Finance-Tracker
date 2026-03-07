import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FinanceProvider } from './hooks/useFinance.jsx'
import LandingPage from './pages/LandingPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <FinanceProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FinanceProvider>
    </BrowserRouter>
  )
}
