import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import '../App.css'
import {Outlet} from 'react-router-dom';


function Layout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout
