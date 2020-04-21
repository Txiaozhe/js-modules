// 1
var arr = [3, 2, 1, 4, 4, 5, 5, 6, 7, 1, 2]
const sorted = arr.sort((a, b) => b - a)
const result1 = {}
for (let s of sorted) {
  result1[s] = s
}

console.log(Object.keys(result1))

// 2
var list = [
  { id: 1, type: 'human', name: '⿅晗' },
  { id: 2, type: 'robot', name: '伊娃' },
  { id: 3, type: 'animal', name: '⾖⾖' },
  { id: 4, type: 'human', name: '蔡徐坤' },
  { id: 5, type: 'robot', name: '夏娃' }
];

const result2 = {}
for (const ele of list) {
  if (!result2[ele.type]) {
    result2[ele.type] = []
  }

  result2[ele.type].push({
    id: ele.id,
    name: ele.name
  })
}
console.log(result2)

// 3
var arr = ['xxyyxyyyyyxxx', 'yxxxx', 'xyyyxxyx', 'xxxx', 'xxxyyy'];
function repl(str, num = 0) {
  return str.replace(/yx/g, '0x').split('0').length - 1
}

for (let s of arr) {
  console.log(repl(s))
}

//4 子查询
SELECT * FROM (SELECT * FROM subject) AS s

// 5 用join
SELECT * FROM users
LEFT JOIN user_salary_records
LEFT JOIN user_role_map
LEFT JOIN roles
WHERE user_salary_records.salary > 10000

