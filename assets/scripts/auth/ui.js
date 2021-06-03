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
  $('#create-question-btn').show()
  $('#view-question').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
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

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignUpError,
  onSignInError
  // onSignOutSuccess,
  // onChangePasswordSuccess,
}
