import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/auth/login'
import Register from './components/auth/register'
import DashboardView from './sections/Overview/OverviewView';
import UsersView from './sections/Users/UsersView';
import ActivityView from './sections/Activity/ActivityView';
import AnalyticsView from './sections/Analytics/AnalyticsView';
import NavigationBar from './components/Home/navbar/navigationbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './components/Home/footer/footer';

function App () {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className='w-full h-full relative'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Services" element={ <Services /> } />
          {/* <Route path="/Dashboard" element={ <Dashboard /> } /> */ }
          <Route path="/Auth/login" element={ <Login /> } />
          <Route path="/Auth/register" element={ <Register /> } />
          <Route path="/Dashboard/Profile" element={ <DashboardView /> } />
          <Route path="/Dashboard/Users" element={ <UsersView /> } />
          <Route path="/Dashboard/Activity" element={ <ActivityView /> } />
          <Route path="/Dashboard/Analytics" element={ <AnalyticsView /> } />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter >
  )
}

export default App
