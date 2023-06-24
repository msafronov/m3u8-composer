const fs = require('fs');

const getFileNamesRecursive = (dir, filterFn) => {
    let result = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        if (filterFn(file) !== true) {
            return;
        }

        file = dir + '/' + file;

        const stat = fs.statSync(file);

        if (stat && stat.isDirectory()) { 
            result = result.concat(getFileNamesRecursive(file, filterFn));
        } else { 
            result.push(file);
        }
    });

    return result;
};

module.exports = {
    getFileNamesRecursive,
};
