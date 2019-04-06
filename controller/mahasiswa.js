let data = [
    {
        nim : '1301184065',
        nama : 'Ilham Izzul Hadyan',
        kelas : 'IF-42-02'
    },
    {
        nim : '1301180505',
        nama : 'Ilham',
        kelas : 'IF-42-05'
    }, 
    {
        nim : '1301185050',
        nama : 'Izzul Hadyan',
        kelas : 'IF-42-08'
    }
]

exports.getMhs = (req, res) => {
    res.send(data)
}

exports.getMhs1 = (req, res) => {
    res.send(data[req.params.index])
}

exports.postMhs = (req, res) => {
    let dataMhs = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data.push(dataMhs)
    res.send(data)
}

exports.putMhs = (req, res) => {
    let updateMhs = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data[req.params.index] = updateMhs
    res.send(data)
}

exports.delMhs = (req, res) => {
    data.splice(req.params.index, 1)
    res.send(data)
}