 
 
 import React from 'react'
 import { render } from 'react-dom'
 
 import App from './App'
 import { CounterProvider } from './conterStore'



 render(
   <CounterProvider>
   <App />
   </CounterProvider>
   ,
   document.querySelector('#root')
 )
 