const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateBirdSpotBtn = function (event) {
  event.preventDefault()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#create-birdspot-btn').hide()
  $('#view-user-birdspots').hide()
  $('#create-birdspot').show()
}

const onCreateBirdSpot = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createBirdSpot(formData)
    .then(ui.onCreateBirdSpotSuccess)
    .catch(ui.onBirdSpotError)
}

const onCreateBirdSpotBackBtn = function (event) {
  event.preventDefault()
  $('#create-birdspot').hide()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
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

module.exports = {
  onCreateBirdSpotBtn,
  onCreateBirdSpot,
  onCreateBirdSpotBackBtn,
  onViewUserBirdSpots,
  onViewAllBirdSpots,
  onDynamicDestroyBirdSpots
}
