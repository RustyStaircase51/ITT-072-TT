import './style.css'
import AppLoader from "./app.jsx"
import HeadLoader from "./components/head.jsx"
import NavbarLoader from "./components/navbar.jsx"
import CardListLoader from "./components/head.jsx"
import CardLoader from "./components/card.jsx"
import FootLoader from "./components/foot.jsx"

import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('Container')).render(
  AppLoader()
)  