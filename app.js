const express = require('express')
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()
const laptopRouter = require('./routes/laptop.route')

const PORT = process.env.PORT || 4000

// khai báo kết nối mongoose
dotenv.config()
const URI =`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster2023.nprrcey.mongodb.net/myapp?retryWrites=true&w=majority&ssl=true`
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> {
    console.log('Kết nối database thành công');
  })
  .catch((error)=> {
    console.log('Kết nối database thất bại');
  });



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))



// khai báo routes
app.use('/laptop', laptopRouter)





app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}!`)
})