function disemvowel(str) {
    const trolls = {
      'a': 'a',
      'A': 'A',
      'e': 'e',
      'E': 'E',
      'i': 'i',
      'I': 'I',
      'o': 'o',
      'O': 'O',
      'u': 'u',
      'U': 'U'
    }
    
    let s = [];
    for(let i = 0; i < str.length; i++) {
      if(!trolls[str[i]]) {
        s.push(str[i]);
      }
    }
    
    str = s.join('');
    
    return str;
  }

  const s = disemvowel('This website is for losers LOL!');
  console.log(s);


  // 最优
  function a_disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  const a = a_disemvowel('This website is for losers LOL!');
  console.log(a);
