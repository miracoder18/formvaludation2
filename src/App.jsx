import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Register from './components/Register'
import Login from './components/Login'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <>

   
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}>
         
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
