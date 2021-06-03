const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
}

const onSignUpError = function () {
  $('#message').text('That email is already registered or the passwords don\'t match, please try again or sign in.')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError
  // onSignInSuccess,
  // onSignOutSuccess,
  // onChangePasswordSuccess,
}
