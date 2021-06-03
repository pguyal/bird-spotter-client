const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateBirdSpotBtn = function (event) {
  event.preventDefault()
  $('#create-birdspot-btn').hide()
  // $('#view-birdspot').hide()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
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
  $('#change-pw-btn').show()
  $('#sign-out').show()
}

module.exports = {
  onCreateBirdSpotBtn,
  onCreateBirdSpot,
  onCreateBirdSpotBackBtn
}
