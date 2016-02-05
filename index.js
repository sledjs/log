'use strict';

module.exports = function log(...logs) {
  console.log(`[${new Date().toLocaleTimeString()}]`, ...processId(logs));
};

function processId(logs) {
  if (typeof logs[0] == 'object') {
    let log = logs[0];

    logs[0] = `[${log.id}]`;

    if (log.name)
      logs[0] += ` [${log.name}]`;
  }

  return logs;
};
