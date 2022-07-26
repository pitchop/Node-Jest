const express = require('express')
const util = require('util')
const router = express.Router()
const axios = require('axios')

router.get('/apis', async (req, res, next) => {
    try {
        const result = await getPubicAPIs()
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

async function getPubicAPIs() {
    return axios.get('https://api.publicapis.org/entries').then(res => res.data)
}

module.exports = { router, getPubicAPIs}