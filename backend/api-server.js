const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const {response} = require("express");
const jwt = require('jsonwebtoken');

const members = [
    {
        id: 3,
        name: "도서관",
        loginId: "lib",
        loginPw: "africa"
    },
    {
        id: 4,
        name: "홍길동",
        loginId: "a",
        loginPw: "1"
    }
]

app.use(bodyParser.json())

app.get('/api/account', (req, res) => {
    console.log(req.cookies);
    if (req.cookies && req.cookies.account){
        const member = req.cookies.account;
        if (member.id){
            res.send(member);
        }
    }
    res.sendStatus(401);
})
app.post('/api/account', (req, res) => {
        const loginId = req.body.loginId;
        const loginPw = req.body.loginPw;
        const member = members.find(m => m.loginId === loginId && m.loginPw === loginPw);
        if (member) {
            const options = {
                domain: "localhost",
                path: "/",
                httpOnly: true
            };
            res.cookie("account", JSON.stringify(member),options);
            res.send(member);
        } else {
            res.send(404);
        }

    console.log('member',member);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})