import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Component/Public/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SellerDashboard from './Component/Private/Seller/SellerDashboard.jsx'
import navs from './Component/Routes/Navigation.jsx'


const user={
  username:"",
  role:"ALL",
  isAuthenticated: false
}

const {role,isAuthenticated}= user;

const allRoutes =() =>{
return (
  <Route path={"/"} element={<App/>}>
  {navs.map((nav,i) =>{
    if(isAuthenticated){
        if(nav.isVisibleAfterAuthentication){
          if(nav.role===role ||nav.role==="ALL"){
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element}/>
        }
       
      }
    }
    else{
      if(!nav.authenticationRequired && nav.role=== "ALL")
      {
        console.log(nav);
        return <Route key={i} path={nav.path} element={nav.element}/>
      }
    }
  })}</Route>
)
}
// const {role, isAuthenticated}=user;
// const allRoutes =() =>{
//      return(
//       <Route path={"/"} element={<App/>}>
//       {
//         navs.map((nav,i)=>{
//           if(isAuthenticated && nav.isVisibleAfterAuth){
//             if(nav.role===role || nav.role==="ALL"){
//                 console.log(nav);
//               return <Route key={i} path={nav.path} element={nav.element}/>
//             }
//           }else{
//             if(!nav.isVisibleAfterAuth && nav.role==="ALL"){
//               return <Route key={i} path={nav.path} element={nav.element}/>
//             }
//           }
          
//         })
//       }

//       {/*{
//         (user.isAuthenticated)
//         ? <Route path={"/login"} element={<Login/>}/>
//         : <Route path={"/seller-dashboard"} element={<SellerDashboard/>}/>
//       } */}
      
//       {/*<Route path={"/cart"} element={<Cart/>}/> */}
        
//       </Route>
//      )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* the tag <browser router> helps to route to child components */}
    <BrowserRouter>
      <Routes>
      {allRoutes()}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)