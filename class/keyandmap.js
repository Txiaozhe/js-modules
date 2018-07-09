const map = new Map();

map.set(1, '1');
map.set(2, '2');
map.set(3, '3');
map.set(4, '4');
map.set(5, '5');

console.log(map);

for(let key of map) {
    if(key[0] > 2) {
        break;
    }
    console.log(key[0], key[1]);
}
