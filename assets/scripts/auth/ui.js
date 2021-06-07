const store = require('../store')

const onSignUpSuccess = function () {
  $('#auth-message').text('Account successfully created!')
  $('#auth-message').addClass('success')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#auth-message').text(response.user.email + ' signed in successfully')
  $('#auth-message').addClass('success')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#home').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
  $('#view-all-birdspots').show()
}

const onSignOutSuccess = function () {
  store.user = null
  $('#auth-message').text('Signed out successfully')
  $('#auth-message').addClass('success')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#home').hide()
  $('#change-pw-btn').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-birdspot-btn').hide()
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').hide()
  $('#bird-spot-message').text('')
  $('#birdspot-display').text('')
  $('#sign-up').show()
  $('#sign-in').show()
}

const onChangePasswordSuccess = function () {
  $('#auth-message').text('Password changed successfully')
  $('#auth-message').addClass('success')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#create-birdspot-btn').show()
  $('#view-user-birdspots').show()
  $('#view-all-birdspots').show()
}

const onSignUpError = function () {
  $('#auth-message').text('That email is already registered or the passwords don\'t match, please try again or sign in.')
  $('#auth-message').addClass('failure')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onSignInError = function () {
  $('#auth-message').text('The username/password is incorrect, please try again.')
  $('#auth-message').addClass('failure')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onSignOutError = function () {
  $('#auth-message').text('Something went wrong, please try again.')
  $('#auth-message').addClass('failure')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onChangePasswordError = function () {
  $('#auth-message').text('The old password is incorrect, please enter the correct old password.')
  $('#auth-message').addClass('failure')
  setTimeout(() => {
    $('#auth-message').text('')
    $('#auth-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onSignUpError,
  onSignInError,
  onSignOutError,
  onChangePasswordError
}
