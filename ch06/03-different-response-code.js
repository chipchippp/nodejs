const express = require('express')
const exphbs = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/error', (req, res)=>{res.status(500).render('error')}) 

app.get('*' , (req, res) => {
    res.send('Check out our "<a href="/error">Error</a>" page!')
})

const port = process.env.POST || 3000

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/error\n`))