import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CalculatorProvider from "./context/CalculatorContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>,
)
