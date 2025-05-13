import React from 'react'
// import Home from './components/Home'
// import About from './components/About'
// import Products from './components/Products'
// import Navbar from './components/Navbar'
import { Route, Routes} from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Navbar />
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/products' element={<Products />} />
//         </Routes>
//     </div>
//   )
// }

// export default App

import Dashboard from './nested-components/dashboard/Dashboard';
import Profile from './nested-components/dashboard/Profile';
import Setting from './nested-components/dashboard/Setting';
import Home from './nested-components/Home';

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Setting />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App