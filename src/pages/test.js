import React from "react"
import {navigate} from "gatsby"
import Header from "../components/Header"

const Test = () => (
    <div>
        <Header title="Header of our test page"></Header>
        <h1>This is a test Page!</h1>
        <h1>This is a test Page2!</h1>
        <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
    </div>
)

export default Test;