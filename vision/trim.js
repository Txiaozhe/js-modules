function trimAreaAndChannel(br, source, other, cb) {
  br = br || 10;
  if (!source || !source.length) {
    return [];
  }

  source.slice(br).forEach(o => {
    other = cb && cb(other, o);
  });

  const res = source.slice(0, br);
  if (other) {
    res.push(other);
  }
  return res;
}

const src = [
  {
    type: 'a',
    a: 1
  },
  {
    type: 'b',
    a: 2
  },
  {
    type: 'c',
    a: 3
  }
];

const other = {
  type: 'other',
  a: 4,
}

const s = trimAreaAndChannel(2, src, other, (oth, so) => {
  return {
    type: 'other',
    a: oth.a + so.a,
  }
});

console.log(s);

src.forEach((a) => {
  throw 'k'
});
