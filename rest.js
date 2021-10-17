const https = require('https')

url = "frontend-task-api.raketa.im";
headers = {};

const data = new TextEncoder().encode(
  JSON.stringify( { login: 'admin', password: 'admin' }));

const options = {
  hostname: url,
  port: 443,
  path: '/api/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}


const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    afterAuth(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

function afterAuth(auth) {
  console.log(typeof(auth))
  // process.stdout.write(auth)
  console.log(auth.toJSON().data)
  console.log(auth.toString())
  const obj = JSON.parse(auth.toString())
  console.log(obj)
  console.log(obj["access_token"])
  // console.log(Object.keys(auth))

}
