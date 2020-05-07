function check(ips = []) {
    const checkTimer = setTimeout(() => {
      const checked = {};
      [].concat(ips).forEach(ip => {
        if (!checked[ip]) {
          checked[ip] = true;
          _check(ip);
        }
      });
    }, 200);
  }

  function _check(ip) {
    const bee = null;// this.remotes[ip];
    if (bee) {
      try {
        // bee.task = await bee.remote.count();
      } catch (e) {
        // util.alarm('_check', e);
        if (bee.error++ > MAX_BEE_RETRY) {
          // this.recycleTask(ip);
        }
      }
    } else {
        console.log(ip);
      // this.recycleTask(ip);
    }
  }

  check(['10.4.20.15']);