const store = require('../store')

const onCreateBirdSpotSuccess = function (response) {
  store.bird = response.question
  $('#bird-spot-message').text('Bird Sighting successfully ')
  $('#bird-spot-message').addClass('success')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onCreateBirdSpotError = function () {
  $('#bird-spot-message').text('Please enter information in all fields and try again')
  $('#bird-spot-message').addClass('failure')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onCreateBirdSpotSuccess,
  onCreateBirdSpotError
}
