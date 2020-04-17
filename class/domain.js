'use strict'

const EventEmitter = require('events')
const domain = require('domain')

const domain1 = domain.create()

domain1.on('error', err => {
    console.log('domain1: ', err)
})

const emitter1 = new EventEmitter()
domain1.add(emitter1)

emitter1.emit('error', new Error('jjjj'))
