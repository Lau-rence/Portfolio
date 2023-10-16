import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { register } from 'swiper/element/bundle';
register();

import customTheme from './customTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{overflow: 'hidden'}}>
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </div>
)
