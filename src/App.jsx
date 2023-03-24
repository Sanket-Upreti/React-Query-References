import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './reactQueryFetching'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Welcome from '../Welcome'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Welcome Page</NavLink>
              </li>
              <li>
                <NavLink to="/reactQuery-api">Fetch API</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Welcome />}/>
            <Route exact path="/reactQuery-api" element={<Index />}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
