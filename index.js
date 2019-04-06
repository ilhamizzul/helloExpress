const express = require('express')
let app = express()
const bodyParser = require('body-parser')
let mhs = require('./controller/mahasiswa')

app.use(bodyParser.urlencoded({extended : true}))

// let data = [
//     {
//         nim : '1301184065',
//         nama : 'Ilham Izzul Hadyan',
//         kelas : 'IF-42-02'
//     },
//     {
//         nim : '1301180505',
//         nama : 'Ilham',
//         kelas : 'IF-42-05'
//     }, 
//     {
//         nim : '1301185050',
//         nama : 'Izzul Hadyan',
//         kelas : 'IF-42-08'
//     }
// ]

// app.use ((req, res, next) => {
//     if(req.body.nim) {
//         next()
//     } else {
//         res.send('maaf nim tidak ada?')
//     }
// }) // buat autentikasi

// app.get('/mahasiswa', (req, res) => {
//     // res.send(req.params.index) untuk mengambil value dari URL
//     //res.send('haaaaiiiii, ini halaman get') res cuma bisa dipakai sekali
//     res.send(data);
// })

app.get('/mahasiswa', mhs.getMhs)

app.get('/mahasiswa/:index', mhs.getMhs1)

// app.post('/mahasiswa', (req, res) => {
//     let dataMhs = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
//     data.push(dataMhs)
//     res.send(data)
// })

app.post('/mahasiswa', mhs.postMhs)

// app.put('/mahasiswa/:index', (req, res) => {
//     let updateMhs = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
//     //data.splice(req.params.index, 1, updateMhs)
//     data[req.params.index] = updateMhs
//     res.send(data)
//     //res.send('haaaaiiiii, ini halaman put')
// })

app.put('/mahasiswa/:index', mhs.putMhs)

// app.delete('/mahasiswa/:index', (req, res) => {
//     data.splice(req.params.index, 1)
//     res.send(data)
//     //res.send('haaaaiiiii, ini halaman delete')
// })

app.delete('/mahasiswa/:index', mhs.delMhs)

app.listen(8080)