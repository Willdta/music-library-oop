// Library Class
class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist)
  }
}

// Playlist Class
class Playlist {
  constructor(name) {
    this.name = name
    this.tracks = []
  }

  addTrack(track) {
    this.tracks.push(track)
  }

  // Calculate Rating
  overallRating() {
    let trackSum = this.tracks.map(track => track.rating).reduce((a, b) => a + b, 0)
    return trackSum / this.tracks.length
  }

  // Calculate Duration
  totalDuration() {
    return this.tracks.map(track => track.length).reduce((a, b) => a + b)
  }
}

//Track Class
class Track {
  constructor(title, rating, length) {
    this.title = title
    this.rating = rating
    this.length = length
  }
}

// Add new instances of main Class Components
const testLibrary = new Library('gabe', 'pozo')
const testTrack = new Track('gabe', 5, 100)
const testPlaylist = new Playlist('gabe lol')

testPlaylist.addTrack(testTrack)
testPlaylist.addTrack(testTrack)
testLibrary.addPlaylist(testPlaylist)

// The Entire Playlist Section
console.log('The Playlist: ', testPlaylist)

// The Entire Library
console.log('The Library: ', testLibrary)

// The Entire Track Section
console.log('The Tracks: ', testTrack)

// Our Sum
console.log('The Track Length Sum: ', testPlaylist.totalDuration())

// Our Average
console.log('The Tracking Rating Average: ', testPlaylist.overallRating())
