import axios from 'axios'

export const fetchService = {
  async get(url, options = {}) {
    try {
      const config = {
        headers: options.headers || {}
      }
      const response = await axios.get(url, config)
      if (response.status === 200) {
        return response.data
      } else {
        console.error('An error occurred while fetching data:', response.status)
        return null
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error)
      return null
    }
  },

  async post(url, data) {
    try {
      const response = await axios.post(url, data)
      if (response.status === 200 || response.status === 201) {
        return response.data
      } else {
        console.error('An error occurred while posting data:', response.status)
        return null
      }
    } catch (error) {
      console.error('An error occurred while posting data:', error)
      return null
    }
  },

  async put(url, data) {
    try {
      const response = await axios.put(url, data)
      if (response.status === 200 || response.status === 204) {
        return response.data
      } else {
        console.error('An error occurred while updating data:', response.status)
        return null
      }
    } catch (error) {
      console.error('An error occurred while updating data:', error)
      return null
    }
  },

  async delete(url) {
    try {
      const response = await axios.delete(url)
      if (response.status === 200 || response.status === 204) {
        return response.data
      } else {
        console.error('An error occurred while deleting data:', response.status)
        return null
      }
    } catch (error) {
      console.error('An error occurred while deleting data:', error)
      return null
    }
  }
}
