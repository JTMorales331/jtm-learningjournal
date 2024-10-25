import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
)
