import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/listings`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (listingData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listingData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (listingData) => {
  try {
    const res = await fetch(`${BASE_URL}/${listingData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listingData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const addPhoto = async (photoData, listingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${listingId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: photoData
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const createReview = async (id, reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createActivity = async (id, activityData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/activities`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteListing = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createReservation = async (id, reservationData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/reservations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  addPhoto,
  createReview,
  createActivity,
  deleteListing,
  createReservation
}
