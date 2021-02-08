const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

const members = [
    {
        id: 1,
        name: 'John',
        email: 'john@mail.ru',
        status: 'active'
    },
    {
        id: 2,
        name: 'Eve',
        email: 'eve@mail.ru',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Bill',
        email: 'bill22@mail.ru',
        status: 'active'
    },
    {
        id: 4,
        name: 'Ron',
        email: 'ron-gone@mail.ru',
        status: 'inactive'
    }
];

app.get('api/members', (req,res)=>{
    res.json(members);

});

// Set a static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`));

