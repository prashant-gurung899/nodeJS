let os = require('os')
const log = console.log

//log(os)
log(`os architecture : ${os.arch()}`)
log(`os platform : ${os.platform()}`)
log(`os release : ${os.release()}`)
log(`os total memory : ${os.totalmem()}`)
log(`os free memory : ${os.freemem()}`)
log(os.tmpdir())
log(os.homedir())
log(os.hostname())