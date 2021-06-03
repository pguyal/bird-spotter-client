const config = require('../config')
const store = require('../store')

// CREATE (post) request
const createBirdSpot = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/birds',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createBirdSpot
  // viewBirdSpot,
  // destroyBirdSpot,
  // updateBirdSpot
}
