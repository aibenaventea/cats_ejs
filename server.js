const express = require('express');
// const lint = require('ejs-lint')
const app = express();
// const ejsLint = require('ejs-lint');
// ejsLint(text, options); 

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

let cats = [
    {
        image: '/images/RussianBlue.jpg',
        breed: 'Russian Blue',
        size: 'Medium, weighing 8 to 15 pounds',
        coat: 'Short, dense, fine, plush',
        color: 'Blue with silver tips'
    },
    {
        image: '/images/JapaneseBobtail.jpg',
        breed: 'Japanese Bobtail',
        size: 'Medium, with males weighing 7 to 10 pounds and females weighing 5 to 7 pounds',
        coat: 'Long (longhaired) and short (shorthaired)',
        color: 'White, black, red, blue and cream, plus various patterns and shadings'
    },
    {
        image: '/images/Bengal.jpg',
        breed: 'Bengal',
        size: 'Medium to large with males: 10 to 18 pounds and females: 6 to 12 pounds',
        coat: 'Medium',
        color: 'Bright orange to light brown, with dark spots or a distinctive marbling pattern'
    },
    {
        image: '/images/Somali.jpg',
        breed: 'Somali',
        size: 'Medium to large, with males weighing 10 to 12 pounds and females weighing 6 to 10 pounds',
        coat: 'Medium, fine, soft',
        color: 'Ruddy, red, blue, fawn'
    }
]

app.get('/', (request, response) => {
    response.render('cats', {cats: cats})
})

app.get('/cuddles', (request, response) => {
    const {idx} = request.query; 
    response.render('cuddles', {detail: cats[idx]})
})

app.listen(8000);
console.log('Server is listening on port 8000')
console.log(__dirname);