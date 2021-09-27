const fse = require('fs-extra');
const path = require('path');

const run = async () => {
  const targetDirectoryName = path.join(__dirname, '../lib');
  const destDirectoryName = path.join(process.cwd());

  await fse.copy(targetDirectoryName, destDirectoryName);
};

module.exports = function () {
  return {
    run: run,
  };
};
