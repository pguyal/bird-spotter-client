const config = require('../config')
// const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

module.exports = {
  signUp
  // signIn,
  // signOut,
  // changePassword
}
