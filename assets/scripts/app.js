'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const birdSpotEvents = require('./bird-spot/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Initial hidden auth elements
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-pw-btn').hide()

  // Initial hidden BirdSpot elements
  $('#create-birdspot').hide()
  $('#create-birdspot-btn').hide()
  $('#view-user-birdspot').hide()

  // User Auth Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-pw-btn').on('click', authEvents.onChangePasswordBtn)

  // BirdSpot Events
  $('#create-birdspot').on('submit', birdSpotEvents.onCreateBirdSpot)
  $('#create-birdspot-btn').on('click', birdSpotEvents.onCreateBirdSpotBtn)
  $('#create-birdspot-back-btn').on('click', birdSpotEvents.onCreateBirdSpotBackBtn)
  $('#view-user-birdspot').on('click', birdSpotEvents.onViewUserBirdSpot)
  $('#birdspot-display').on('click', '.birdspots-destroy-dynamic', birdSpotEvents.onDynamicDestroyBirdSpots)
})
