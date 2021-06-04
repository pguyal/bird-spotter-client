const store = require('../store')

// Create Success Message
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

// Index USER Success Message
const onViewUserBirdSpotsSuccess = function (response) {
  $('#bird-spot-message').text('Here are your created Bird Sightings:')
  $('#create-birdspot-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').show()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    birdsHtml += `
    <hr>
    <img src="${bird.image}" alt ="${bird.species}" style="width:150px" />
    <h4>${bird.name}</h4>
    <h6>${bird.species}</p>
    <h4>Location: ${bird.location}</p>
    <button class="update-birdspot-btn" data-id=${bird._id}>Edit</button>
    <button class='destroy-birdspots-dynamic' data-id=${bird._id}>
      Delete
    </button>
    <form class="update-birdspot-dynamic" data-id=${bird._id}>
      <input name="bird[name]" type="text" placeholder="${bird.name}">
      <input name="bird[species]" type="text" placeholder="${bird.species}">
      <input name="bird[location]" type="text" placeholder="${bird.location}">
      <input name="bird[image]" type="url" class="birdImageUrl" placeholder=${bird.image}>
      <button type="submit" value="Update BirdSpot">Update</button>
      <button class="update-birdspot-back-btn">Back</button>
    </form>
    `
  })
  $('#birdspot-display').html(birdsHtml)
  $('.update-birdspot-dynamic').hide()
  $('form').trigger('reset')
}

// Index ALL Success Message
const onViewAllBirdSpotsSuccess = function (response) {
  $('#bird-spot-message').text('Here is a list of all Bird Sightings:')
  $('#create-birdspot-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-all-birdspots').hide()
  $('#view-user-birdspots').show()
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
    <h4>User: ${bird.owner.email}</h4>
    `
  })
  $('#birdspot-display').html(birdsHtml)
  $('form').trigger('reset')
}

// Destroy Success Message
const onDestroyBirdSpotSuccess = function () {
  $('#bird-spot-delete-message').text('Bird Sighting deleted successfully')
  $('#bird-spot-delete-message').addClass('success')
  setTimeout(() => {
    $('#bird-spot-delete-message').text('')
    $('#bird-spot-delete-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

// Update Success Message
const onUpdateBirdSpotSuccess = function () {
  $('#bird-spot-update-message').text('Bird Sighting updated successfully')
  $('#bird-spot-update-message').addClass('success')
  setTimeout(() => {
    $('#bird-spot-update-message').text('')
    $('#bird-spot-update-message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
}

// Create Failure Message
const onCreateBirdSpotError = function () {
  $('#bird-spot-message').text('Please enter information in all fields correctly and try again')
  $('#bird-spot-message').addClass('failure')
  setTimeout(() => {
    $('#bird-spot-message').text('')
    $('#bird-spot-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

// Index (USER), Index(ALL), Destroy Failure Message
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
  onUpdateBirdSpotSuccess,
  onCreateBirdSpotError,
  onBirdSpotError
}
