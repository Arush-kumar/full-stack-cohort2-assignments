import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
      <h2>This is for navbar</h2>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
