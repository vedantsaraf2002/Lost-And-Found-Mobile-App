import React from 'react'
import { Redirect } from "expo-router";

const Home = () => {
    return (
        <Redirect href={"(drawer)/login"} />
    )

}

export default Home
