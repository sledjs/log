'use strict';

module.exports = function log(...logs) {
  console.log(`[${new Date().toLocaleTimeString()}]`, ...processId(logs));
};

function processId(logs) {
  if (typeof logs[0] == 'object') {

    if (logs[0].id)
      logs[0] = `[${logs[0].id}]`;
    else
      logs.shift();
  }

  return logs;
};
