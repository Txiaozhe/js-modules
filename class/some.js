const res = [
    {
        typeId: 9
    },
    {
        typeId: 8
    },
    {
        typeId: 8
    }
]

console.log(res.every(r => r.typeId === res[0].typeId))
