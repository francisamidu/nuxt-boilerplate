import api from '@/services/api'
import Food from '@/interfaces/FoodExtend'
import Order from '@/interfaces/Order'
import User from '@/interfaces/UserExtend'

export default {
  createFood(payload: Food) {
    return api
      .post('api/createFood', payload)
      .then(response => response)
      .catch((error: Error) => error)
  },
  getAllFoods() {
    return api
      .get('api/getAllFoods')
      .then(response => response)
      .catch((error: Error) => error)
  },
  signup(payload: User) {
    return api
      .post(`api/authors/signup`, payload)
      .then(response => response)
      .catch((error: Error) => error)
  },
  login(payload: User) {
    return api
      .post(`api/authors/login`, payload)
      .then(response => response)
      .catch((error: Error) => error)
  }
}
