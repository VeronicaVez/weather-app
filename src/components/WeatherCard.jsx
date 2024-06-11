import React from "react"
import Card from "react-bootstrap/Card"
import { useState } from "react"
import { Container, Form, ListGroup } from "react-bootstrap"
import axios from "axios"
import SearchBar from "./SearchBar"
import "./WeatherCard.css"

const API_BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`

function WeatherCard() {
  const [weather, setWeather] = useState([])
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState("")

  const getLocation = (city) => {
    setLocation(city)
    setShow(false)

    axios
      .get(`${API_BASE_URL}${city}`)
      .then(({ data }) => {
        console.log(data)
        setShow(true)
        setWeather(data)
      })
      .catch((err) => {
        console.log(err)
        setShow(false)
      })
  }

  return (
    <Container>
      <SearchBar newLocation={getLocation} className="searchBar" />
      {show && weather && (
        <Card style={{ width: "18rem" }} className="weatherCard">
          <Card.Title className="title">
            {weather.location.name}, {weather.location.country}
          </Card.Title>
          <Card.Body className="weather-info">
            <Card.Img
              className="weather-info-img"
              src={weather.current.condition.icon}
            />
            <Card.Body>
              <Card.Text className="card-body-text1">
                {weather.current.condition.text}
              </Card.Text>
              <Card.Text className="card-body-text2">
                {weather.current.temp_c}ºC
              </Card.Text>
            </Card.Body>
          </Card.Body>
          <ListGroup className="card-bottom">
            <ListGroup.Item className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-thermometer-half"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
              </svg>
              <ListGroup.Item className="item">
                {weather.current.feelslike_c}ºC Feels Like
              </ListGroup.Item>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-droplet"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"
                />
              </svg>
              <ListGroup.Item className="item">
                {weather.current.humidity}% Humidity
              </ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </Container>
  )
}

export default WeatherCard
