'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Initial hidden auth elements
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-pw-btn').hide()
  // User Auth Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-pw-btn').on('click', authEvents.onChangePasswordBtn)
})
