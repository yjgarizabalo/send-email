const express = require('express')
const app = express()
const path = require('path')


app.use(express.urlencoded({extended: false}))
app.use(express.json())

// router
app.use(require('./routes/index'))

// md
app.use(express.static(path.join(__dirname, 'public')))

// puerto online
app.listen(7700, () => {
    console.log('Server on port 7700')
})