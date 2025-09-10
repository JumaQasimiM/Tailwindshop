import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

// main layout for all pages
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default MainLayout;
