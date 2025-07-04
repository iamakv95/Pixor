import { Header,Footer } from '../components'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout