/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

function copy() {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (process.argv.length !== 4) {
    console.error('You need provide 4 arg');

    return;
  }

  fs.copyFile(sourceFile, destinationFile, (error) => {
    console.error(error);
  });
}

copy();
