const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Button that leads to create birdspot form
const onCreateBirdSpotBtn = function (event) {
  event.preventDefault()
  $('#bird-spot-message').text('')
  $('#auth-message').text('')
  $('#create-birdspot-btn').hide()
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').hide()
  $('#create-birdspot').show()
}

// Create (post) birdspot form w/ api call
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
  $('#bird-spot-message').text('')
  $('#auth-message').text('')
  $('#create-birdspot').hide()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
  $('#view-all-birdspots').show()
}

// Button that shows user an index of their own birdspots
const onViewUserBirdSpots = function () {
  $('#birdspot-display').show()
  api.viewUserBirdSpots()
    .then(ui.onViewUserBirdSpotsSuccess)
    .catch(ui.onBirdSpotError)
}

// Button that shows user an index of ALL user birdspots
const onViewAllBirdSpots = function () {
  $('#birdspot-display').show()
  api.viewAllBirdSpots()
    .then(ui.onViewAllBirdSpotsSuccess)
    .catch(ui.onBirdSpotError)
}

// Button that deletes the birdspot w/ api call
const onDynamicDestroyBirdSpots = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyBirdSpot(id)
    .then(onViewUserBirdSpots)
    .then(ui.onDestroyBirdSpotSuccess)
    .catch(ui.onBirdSpotError)
}

// Button that leads to birdspot update form
const onUpdateBirdSpotsBtn = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  // Selects the form of the specific birdspot from the button pressed
  const formToShow = $(`.update-birdspot-dynamic[data-id=${id}]`)
  $('.destroy-birdspots-dynamic').hide()
  $('.update-birdspot-btn').hide()
  // Only displays the form of the specific birdspot to show update form
  formToShow.show()
}

// Update (patch) birdspot form w/ api call
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

// Button that returns out of the birdspot update form back to index
const onUpdateBirdSpotsBackBtn = function (event) {
  event.preventDefault()
  $('#bird-spot-message').text('')
  $('#auth-message').text('')
  $('.update-birdspot-dynamic').hide()
  $('.destroy-birdspots-dynamic').show()
  $('.update-birdspot-btn').show()
}

// Universal home button that returns user to main page
const onHome = function (event) {
  event.preventDefault()
  $('#birdspot-display').text('')
  $('#bird-spot-message').text('')
  $('#change-password').hide()
  $('#create-birdspot').hide()
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
