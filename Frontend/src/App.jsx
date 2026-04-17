import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import pagePath from './Router/pagePath'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import PageNotFound from './Pages/NoteFound/PageNotFound'
import EmployeeHome from './Pages/Employee/EmployeeHome'
import MyTask from './Pages/Employee/MyTask'
import Profile from './Pages/Employee/Profile'
import AdminHome from './Pages/Admin/AdminHome'
import AdminProfie from './Pages/Admin/AdminProfie'
import Permission from './Pages/Admin/Permission'
import TaskManagement from './Pages/Admin/TaskManagement'
import Protected from './Router/ProtectedRouters/Protected'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path={pagePath.HOME} element={<HomePage/>} />
        <Route path={pagePath.LOGIN} element={<Login />} />
        <Route path={pagePath.REGISTER} element={<Register />} />
        {/* Admin protected Route */}
           <Route path={pagePath.ADMIN} element={<Protected role="Admin"><Outlet/></Protected>} >
               <Route index element={<AdminHome/>}/>
               <Route path={pagePath.ADMIN_PROFILE} element={<AdminProfie/>}/>
               <Route path={pagePath.PERMISSIONS} element={<Permission/>}/>
               <Route path={pagePath.EMPLOYEE_MANAGEMENT} element={<TaskManagement/>}/>
          
           </Route>
        {/* Employee protected Route */}
        <Route path={pagePath.EMPLOYEE} element={<Protected role="Employee"><Outlet/></Protected>}>
          <Route index element={<EmployeeHome />} />
          <Route path={pagePath.EMPLOYEE_MYTASK} element={< MyTask/>} />
          <Route path={pagePath.EMPLOYEE_PROFILE} element={<Profile />} />

        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default App