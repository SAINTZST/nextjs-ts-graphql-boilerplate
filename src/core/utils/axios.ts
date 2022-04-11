import axios from 'axios'

const axiosFactory = () => {
  return axios
}

const Axios = axiosFactory()

export { Axios as default }
