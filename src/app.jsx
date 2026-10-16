import ShowInfo from "./components/info.jsx"
import MessageForm from "./components/input.jsx"
import ShowHeader from "./components/header.jsx"

function AppLoader() {
return (
    <>
    <header>
    <ShowHeader />
    </header>

    <main>
    <ShowInfo />
    <MessageForm />
    
    </main>
    </>
)
}

export default AppLoader;