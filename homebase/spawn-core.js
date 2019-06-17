/* eslint-disable no-console */

var path = require('path')
var cp = require('child_process')
var HTTPSESSION_PATH = path.join(__dirname, './httpsession/')

module.exports = main

function main(opts) {
  var EXEC_PATH = opts.EXEC_PATH
  var MAIN_ENTRY = opts.MAIN_ENTRY
  doCheck()

  function doCheck() {
    cp.exec('ps', (err, stdout) => {
      if (err) {
        console(err)
        process.exit(12)
        return
      }
      var lagacyProcesses = stdout.split(/\n/)
        .map(line => line.trim().split(/ +/))
        .filter(line => /homebase/.test(line))
        .filter(line => {
          return line[2] === 'homebase-core' ||
            line[2] === 'homebase-driver-host' ||
            line[3] === '/data/homebase/core/index.js' ||
            line[3] === '/data/homebase/core/lib/driver-host.js'
        })
        .map(line => {
          line[0] = parseInt(line[0])
          return line
        })
        .filter(line => line[0] !== process.pid)

      if (!lagacyProcesses.length) {
        return doSpawn()
      }

      Promise.all(lagacyProcesses.map(proc => {
        return new Promise((resolve) => {
          console.log(`kill ${proc.join(' ')}`)
          cp.exec(`kill ${proc[0]}`, (err, stdout, stderr) => {
            if (err) {
              console.log('stdout:', stdout)
              console.log('stderr:', stderr)
              console.error('Error kill process', err)
              // do Nothing()
            }
            resolve()
          })
        })
      }))
        .then(doSpawn)
    })
  }


  function doSpawn() {
    console.log('dospawn', EXEC_PATH, MAIN_ENTRY)

    cp.exec(`chmod +x ${EXEC_PATH} && ${EXEC_PATH} -v`, (err, stdout) => {
      console.log(`====== iotjs version is ${stdout.toString()} ======`) // eslint-disable-line
      var child = cp.spawn(
        EXEC_PATH,
        [ MAIN_ENTRY ],
        {
          env: Object.assign({}, process.env, {
            LD_LIBRARY_PATH: `${process.env.LD_LIBRARY_PATH}:${HTTPSESSION_PATH}`
          }),
          stdio: 'inherit'
        }
      )


      child.on('close', (code, signal) => {
        console.error('homebase-core closed with code ', code, signal) // eslint-disable-line
        process.exit(code)
      })

      child.on('error', (err) => {
        console.error('homebase-core error ', err) // eslint-disable-line
        process.exit(13)
      })
    })
  }
}