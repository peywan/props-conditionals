import './App.css'
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
        <h2>Your dashboard </h2>
        <UserGreeting isLoggedIn={true} username="peywan"/>
    </>
  )
}

export default App
