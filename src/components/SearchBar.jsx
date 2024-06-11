import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import "./SearchBar.css"

function SearchBar({ newLocation }) {
  const [city, setCity] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ city })
    newLocation(city)
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  return (
    <Navbar className="searchBar">
      <Form inline onSubmit={onSubmit}>
        <Row className="row-style">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Enter your city name here..."
              className="line-style"
              onChange={handleChangeCity}
            />
            <Button type="submit" className="button-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="bisque"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}

export default SearchBar
