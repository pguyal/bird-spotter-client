const store = require('../store')

const onCreateBirdSpotSuccess = function (response) {
  store.bird = response.bird
  $('#bird-spot-message').text('Bird Sighting created successfully ')
  $('#bird-spot-message').addClass('success')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onViewUserBirdSpotsSuccess = function (response) {
  $('#bird-spot-message').text('Here are your created Bird Sightings:')
  $('#create-birdspot-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').hide()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    birdsHtml += `
    <hr>
    <img src="${bird.image}" alt ="${bird.name}" style="width:150px" />
    <h4>${bird.name}</h4>
    <h6>${bird.species}</p>
    <h4>Location: ${bird.location}</p>
    <button class='birdspots-destroy-dynamic' data-id=${bird._id}>
    Delete
    </button>
    `
  })
  $('#birdspot-display').html(birdsHtml)
}

const onViewAllBirdSpotsSuccess = function (response) {
  $('#bird-spot-message').text('Here is a list of all Bird Sightings:')
  $('#create-birdspot-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-all-birdspots').hide()
  $('#view-user-birdspots').hide()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    console.log(bird)
    birdsHtml += `
    <hr>
    <img src="${bird.image}" alt ="${bird.name}" style="width:150px" />
    <h4>${bird.name}</h4>
    <h6>${bird.species}</h6>
    <h4>Location: ${bird.location}</h4>
    <h4>User: ${bird.owner}</h4)
    `
  })
  $('#birdspot-display').html(birdsHtml)
}

const onDestroyBirdSpotSuccess = function () {
  $('#bird-spot-delete-message').text('Bird Sighting deleted successfully')
  $('#bird-spot-delete-message').addClass('success')
  setTimeout(() => {
    $('#bird-spot-delete-message').text('')
    $('#bird-spot-delete-message').removeClass('success')
  }, 5000)
}

const onCreateBirdSpotError = function () {
  $('#bird-spot-message').text('Please enter information in all fields correctly and try again')
  $('#bird-spot-message').addClass('failure')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onBirdSpotError = function () {
  $('#bird-spot-message').text('Something went wrong, please try again.')
  $('#bird-spot-message').addClass('failure')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}
module.exports = {
  onCreateBirdSpotSuccess,
  onViewUserBirdSpotsSuccess,
  onViewAllBirdSpotsSuccess,
  onDestroyBirdSpotSuccess,
  onCreateBirdSpotError,
  onBirdSpotError
}
