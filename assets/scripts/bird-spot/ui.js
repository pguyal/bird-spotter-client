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

const onCreateBirdSpotError = function () {
  $('#bird-spot-message').text('Please enter information in all fields correctly and try again')
  $('#bird-spot-message').addClass('failure')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onViewUserBirdSpotSuccess = function (response) {
  $('#bird-spot-message').text('Here are your created Bird Sightings:')
  $('#create-birdspot-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-user-birdspot').hide()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    birdsHtml += `
    <img src="${bird.image}" alt ="${bird.name}" style="width:150px" />
    <h4>${bird.name}</h4>
    <h6>${bird.species}</p>
    <h4>Location: ${bird.location}</p>
    `
  })
  $('#birdspot-display').html(birdsHtml)
}

const onViewUserBirdSpotError = function () {
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
  onViewUserBirdSpotSuccess,
  onCreateBirdSpotError,
  onViewUserBirdSpotError
}
