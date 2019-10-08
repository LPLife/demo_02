const config = {
    test:{
        entry:'../src/test/main.js'
    },
    more:{
        entry:'../src/test/main.js'
    }

}
var name = process.argv[2];
module.default = config[name];