const obj = {
    111: {
        room_id: '22'
    },
    222: {
        room_id: '22'
    }
}

if(obj.hasOwnProperty(111)) {
    console.log(obj);
    delete obj[111]
    console.log(obj);
}
