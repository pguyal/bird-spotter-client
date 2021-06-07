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
  $('#view-user-birdspots').hide()
  $('#view-all-birdspots').show()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    birdsHtml += `
    <div class="card text-center" style="width: 26rem;">
      <img src="${bird.image}" class="card-img-top" alt="${bird.name}">
      <div class="card-body">
        <h5 class="card-title">${bird.name}</h5>
        <p class="card-text">Scientific name: ${bird.species}</p>
        <p class="card-text">Location spotted: ${bird.location}</p>
        <button class="update-birdspot-btn btn btn-primary" data-id=${bird._id}>Edit</button>
        <button class='destroy-birdspots-dynamic btn btn-primary' data-id=${bird._id}>
        Delete
        </button>
        <form class="update-birdspot-dynamic" data-id=${bird._id}>
          <h5>Update Bird Sighting</h5>
          <div class="form-group">
            <label for="inputBirdName">Bird's Common Name</label>
            <input name="bird[name]" type="text" class="form-control" placeholder="Enter new common name of bird (optional)">
          </div>
          <div class="form-group">
            <label for="inputBirdSciName">Bird's Scientific Name</label>
            <input name="bird[species]" type="text" class="form-control" placeholder="Enter new scientific name of bird (optional)">
          </div>
          <div class="form-group">
            <label for="inputBirdLocation">Location of Bird Sighting</label>
            <input name="bird[location]" type="text" class="form-control" placeholder="Enter new location of bird sighting (optional)">
          </div>
          <div class="form-group">
            <label for="inputBirdImg">Image of Bird</label>
            <input name="bird[image]" type="url" id="imageUrl" class="form-control" placeholder="Enter new bird image URL (optional)">
          </div>
            <button class="btn btn-primary" type="submit" value="Update BirdSpot">Update</button>
            <button class="update-birdspot-back-btn btn btn-primary">Back</button>
        </form>
      </div>
    </div>
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
  $('#view-all-birdspots').hide()
  $('#view-user-birdspots').show()
  const birds = response.birds
  let birdsHtml = ''
  birds.forEach(bird => {
    console.log(bird)
    birdsHtml += `
    <div class="card text-center" style="width: 20rem;">
      <img src="${bird.image}" style="width:150px height: 150px" class="card-img-top" alt="${bird.name}">
      <div class="card-body">
        <h5 class="card-title">${bird.name}</h5>
        <p class="card-text">Scientific name: ${bird.species}</p>
        <p class="card-text">Location spotted: ${bird.location}</p>
        <p class="card-text">Spotted by: ${bird.owner.email}</p>
      </div>
    </div>
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
