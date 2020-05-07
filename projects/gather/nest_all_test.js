const ACCEPT = 0;
const RUNNING = 1;
const CLOSED = 2;
const FAILED = 3;

function diff(plat, news, olds, isInfo) {
    const current = {};
    [].concat(news).forEach(task => {
      const url = isInfo ? task.url : task;
      current[url] = task;
    });
    const list = {
      del: [],
      stop: [],
      reopen: [],
      deliver: [],
      check: [],
      start: [],
      stopInfo: [],
      startInfo: []
    };
    olds.forEach(task => {
      const url = task.url;
      const client_ip = task.client_ip;
      console.log(url);
      console.log(current.hasOwnProperty(url))
      if (current.hasOwnProperty(url)) {
        delete current[url];
        switch (task.status) {
          case ACCEPT:
            if (client_ip) {
              list.check.push(client_ip);
            } else {
              list.deliver.push(url);
            }
            break;
          case RUNNING:
            if (!client_ip) {
              // TODO error
              list.deliver.push(url);
            }
            break;
          case CLOSED:
            if (client_ip) {
              // list.reopen.push(url);
              console.log('waiting for close');
            } else {
              list.deliver.push(url);
            }
            break;
          case FAILED:
            list.deliver.push(url);
            break;
          default:
            break;
        }
      } else if (client_ip) {
        if (task.status == CLOSED) {
          list.check.push(client_ip);
        } else {
          if (isInfo) {
            list.stopInfo.push(url);
          } else {
            list.stop.push(url);
          }
        }
      } else {
        list.del.push(task.id);
      }
    });
    if (isInfo) {
      for (let url in current) {
        list.startInfo.push(current[url]);
      }
    } else {
      list.start = Object.keys(current);
    }


    console.log(list);
  }

const news = [
    // {
    //     plat: 'quanmin',
    //     status: 2,
    //     id: 356789,
    //     url: 'http://2'
    // }
];

const olds = [
    {
        plat: 'quanmin',
        status: 1,
        id: 356789,
        url: 'http://2',
        client_ip: '127.0.0.1'
    }
];



diff('a', news, olds, true);
