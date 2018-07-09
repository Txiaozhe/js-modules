const vm = require('vm');

const script = new vm.Script("console.log('hehe')")
let sandbox = {window: ''};
let context = vm.createContext(sandbox);
script.runInContext(context);
