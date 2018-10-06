const type = 'test';
const existing = [];

const w = new Error('Possible EventEmitter memory leak detected. ' +
                          `${100} ${String(type)} listeners ` +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.type = type;
      w.count = existing.length;
      process.emitWarning(w);