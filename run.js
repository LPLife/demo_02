const shell = require('shelljs');
var name = process.argv[2];
console.log(name)
const serverMode = () => {
    const command = `webpack-dev-server -n ${name}`;
    shell.exec(command, function(err) {
        if (err) {
            console.log(`Error in project`);
            throw err;
        } else {
            console.log(`end build project`);
        }
    });
}
serverMode();
