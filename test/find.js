const _ = require('lodash');
var users = [{
    uuid: '211c0820-49df-11e8-8503-b14977259c7a',
    id: 0,
    platform: 1,
    cookie: 'lkndmwdwekdlwee',
    roomAddr: 'dwledmewkdmewkfn,mwsw,.qee',
    isDefault: 0 },
{
    uuid: '240f7e90-49df-11e8-8503-b14977259c7a',
    id: 0,
    platform: 1,
    cookie: 'lkndmwdwekdlweeee',
    roomAddr: 'dwledmewkdmewkfn,mwsw,.qeeee',
    isDefault: 1 } ]
   
  console.log(_.find(users, function(o) { return o.isDefault === 1; }));

