import { Header } from "./Header"
import { Footer } from "./Footer"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-100 font-sans min-h-screen text-heading tracking-tight">
      <Header />
      <div className="max-w-7xl mx-auto pt-20 xl:px-0 md:px-8 px-4">
        {children}
      </div>
      <Footer />
    </div>
  )
}
