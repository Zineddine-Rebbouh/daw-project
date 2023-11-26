import {  Route, Routes } from 'react-router-dom'
import { Home , Contact , About , Services ,  RouteError  } from './pages'; 
import Login from './components/auth/login'
import Register from './components/auth/register'
import NavigationBar from './components/Home/navbar/navigationbar'
import Footer from './components/Home/footer/footer';

function App () {
  return (
    <>
      <NavigationBar />
      <div className='w-full h-full relative'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Services" element={ <Services /> } />
          

          {/* <Route path="/Dashboard/Profile/" element={ <DashboardView /> } />
          <Route path="/Dashboard/Users" element={ <UsersView /> } />
          <Route path="/Dashboard/Activity" element={ <ActivityView /> } />
          <Route path="/Dashboard/Analytics" element={ <AnalyticsView /> } /> */}
          {/** handle error  */}
          <Route path='/*' element={<RouteError/>}/>
        </Routes>
      </div>

      <Footer />
    </>

    
  )
}

export default App
