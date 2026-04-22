import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { BlogDetail } from '../components/pages/BlogDetail'
import { MainLayout } from '../components/layout/MainLayout'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/blog/:id" element={
          <MainLayout>
            <BlogDetail />
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}
