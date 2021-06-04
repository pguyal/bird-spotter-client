const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Button that leads to create birdspot form
const onCreateBirdSpotBtn = function (event) {
  event.preventDefault()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#create-birdspot-btn').hide()
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').hide()
  $('#create-birdspot').show()
}

// Create birdspot form w/ api call
const onCreateBirdSpot = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createBirdSpot(formData)
    .then(ui.onCreateBirdSpotSuccess)
    .catch(ui.onBirdSpotError)
}

// Button that leads the user back to main page
const onCreateBirdSpotBackBtn = function (event) {
  event.preventDefault()
  $('#create-birdspot').hide()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
  $('#view-all-birdspots').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
}

const onViewUserBirdSpots = function () {
  $('#birdspot-display').show()
  api.viewUserBirdSpots()
    .then(ui.onViewUserBirdSpotsSuccess)
    .catch(ui.onBirdSpotError)
}

const onViewAllBirdSpots = function () {
  $('#birdspot-display').show()
  api.viewAllBirdSpots()
    .then(ui.onViewAllBirdSpotsSuccess)
    .catch(ui.onBirdSpotError)
}

const onDynamicDestroyBirdSpots = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyBirdSpot(id)
    .then(onViewUserBirdSpots)
    .then(ui.onDestroyBirdSpotSuccess)
    .catch(ui.onBirdSpotError)
}

const onUpdateBirdSpotsBtn = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formToShow = $(`.update-birdspot-dynamic[data-id=${id}]`)
  $('.destroy-birdspots-dynamic').hide()
  $('.update-birdspot-btn').hide()
  formToShow.show()
}

const onDynamicUpdateBirdSpots = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateBirdSpot(id, formData)
    .then(onViewUserBirdSpots)
    .then(ui.onUpdateBirdSpotSuccess)
    .catch(ui.onUpdateBirdSpotError)
}

const onUpdateBirdSpotsBackBtn = function (event) {
  event.preventDefault()
  $('.update-birdspot-dynamic').hide()
  $('.destroy-birdspots-dynamic').show()
  $('.update-birdspot-btn').show()
}

const onHome = function (event) {
  event.preventDefault()
  $('#change-password').hide()
  $('#create-birdspot').hide()
  $('#birdspot-display').text('')
  $('#bird-spot-message').text('')
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
  $('#view-all-birdspots').show()
}
module.exports = {
  onCreateBirdSpotBtn,
  onCreateBirdSpot,
  onCreateBirdSpotBackBtn,
  onViewUserBirdSpots,
  onViewAllBirdSpots,
  onDynamicDestroyBirdSpots,
  onUpdateBirdSpotsBtn,
  onDynamicUpdateBirdSpots,
  onUpdateBirdSpotsBackBtn,
  onHome
}
