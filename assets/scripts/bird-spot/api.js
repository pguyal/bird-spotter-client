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
const viewUserBirdSpots = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/birds',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// INDEX (get) request specifically for ALL user's bird spots
const viewAllBirdSpots = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/birds-all',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// DESTROY (delete) request
const destroyBirdSpot = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/birds/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateBirdSpot = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/birds/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createBirdSpot,
  viewUserBirdSpots,
  viewAllBirdSpots,
  destroyBirdSpot,
  updateBirdSpot
}
