import { Container } from "react-bootstrap"
import WeatherCard from "./components/WeatherCard.jsx"
import "./App.css"

function App() {
  return (
    <Container className="App">
      <h1>Weather App</h1>
      <WeatherCard />
    </Container>
  )
}

export default App
