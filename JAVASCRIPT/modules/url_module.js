const log = console.log
let url = require('url')

let addr = 'http://www.example.com/contact.html?username=prashant&city=pokhara&mobile=9899494194';

let p = url.parse(addr,true) //true argument gives query propety in the form of an object

log(`path: ${p.path}`)
log(`path name: ${p.pathname}`)
log(`protocol: ${p.protocol}`)
log(`hostname: ${p.hostname}`)
log(`host: ${p.host}`)
log(p.query)
log(`search: ${p.search}`)
//log(`searchParams: ${p.searchParams}`)
log(`key1(username): ${p.query.username}`)
log(`key2(city): ${p.query.city}`)
log(`key3(mobile): ${p.query.mobile}`)
log(p.href)
//log(p)
