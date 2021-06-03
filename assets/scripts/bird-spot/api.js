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

// INDEX (get) request specifically for user's bird spots
const viewUserBirdSpot = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/birds',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createBirdSpot,
  viewUserBirdSpot
  // destroyBirdSpot,
  // updateBirdSpot
}
