import { Outlet } from "react-router"
import NavBar from "./NavBar"
import { Footer } from "./Footer"

const Layout = () => {
  return (
    <main>
        <NavBar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout