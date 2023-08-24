const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/account', (req, res) => {
    res.send({
        mid: 3,
        memberName : "홍길동"
    })
})
app.post('/api/account', (req, res) => {
    const loginId = req.body.loginId;
    const loginPw = req.body.loginPw;
    console.log(loginId + '/'+loginPw);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})