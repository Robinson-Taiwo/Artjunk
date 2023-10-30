/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './BlogPage'
import Home from './Home'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<BlogPage />} />


        </Routes>
    )
}

export default AppRoutes