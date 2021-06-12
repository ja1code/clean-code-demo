const express = require("express")
const axios = require("axios")
const cors = require("cors")

const smth = express() // Smth = Something

const lol = axios.create({
  baseURL: "https://kitsu.io/api/edge"
})

smth.get("/", (req, res) => {
  res.send("ANIME API 0.1")
})

smth.get("/anime", async (req, res) => {
  try {
    const get = await lol.get("/anime", { params: req.query }) // Get anime from kitsu
  } catch (error) {
    res.statusCode(500).json({
      error: true,
      message: "You broke me </3"
    })
  }
})

smth.listen(3000, () => {
  console.log("Server up @3000")
})