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
      body: photoData
    })
    return res.json()
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

export {
  index,
  show,
  create,
  update,
  addPhoto,
  createReview,
}
