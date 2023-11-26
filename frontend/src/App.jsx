import {  Route, Routes , useLocation } from 'react-router-dom'
import { Home , Contact , About , Services , Quiz ,  RouteError  } from './pages'; 
import NavigationBar from './components/Home/navbar/navigationbar'
import Footer from './components/Home/footer/footer';
import { AnimatePresence } from 'framer-motion';
function App () {
  const location = useLocation()
  return (
    <>
      <NavigationBar />
      <div className='w-full h-full relative'>
        <AnimatePresence>

        <Routes location={location} key={location.key}>
          <Route path="/" element={ <Home /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Services" element={ <Services /> } />
          <Route path="/quiz" element={ <Quiz /> } />
          
          {/** handle error  */}
          <Route path='/*' element={<RouteError/>}/>
        </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </>

    
  )
}

export default App
