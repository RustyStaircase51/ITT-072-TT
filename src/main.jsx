import './style.css'
import AppLoader from "./app.jsx"
import HeadLoader from "./components/header.jsx"
import FormLoader from "./components/form.jsx"
import FootLoader from "./components/footer.jsx"
import CardLoader from "./components/moviecard.jsx"
import RenderFilter from "./components/filter.jsx"

import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('Container')).render(
  <AppLoader />
)  