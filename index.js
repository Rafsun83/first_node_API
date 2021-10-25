const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

// const prot = process.env.PORT || 3000
const port = 3000;

// const handler = (req, res) => {
//     res.send('hello from node');
// }
const users = [
    { id: 0, name: 'abdullah', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 1, name: 'rahimullah', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 2, name: 'solimullah', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 3, name: 'kolim', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 4, name: 'hasib', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 5, name: 'muktadir', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
    { id: 6, name: 'rifat', email: 'abdullah@gmail.com', work: 'laber', phone: '018258532765' },
]

app.get('/', (req, res) => {
    res.send('hello from my firs node app. im excited for this and this is xoss')
});

app.get('/user', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchresult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchresult)

    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
//app method for post
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body)
    // res.send('inside post')
    res.json(newUser)
})





app.listen(port, () => {
    console.log('listing to port', port);
});
