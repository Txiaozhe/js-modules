function checkList(list) {
    let found = -1; // -1 表示未找到
    let res = [];
    list && list.forEach((ele) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].room_id === ele.room_id) {
          found = 0;
          break;
        }
      }

      if (found === -1) {
        res.push(ele);
      } else {
        found = -1;
      }
    });
    console.log('去重后 length：', res.length);
    console.log();
    return res;
}

let a = [
    {
        room_id: 1
    },
    {
        room_id: 1
    },
    {
        room_id: 2
    },
    {
        room_id: 1
    },
    {
        room_id: 2
    }
]

console.log(a);
console.log(checkList(a));