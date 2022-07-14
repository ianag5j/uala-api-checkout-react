import axios from "axios"

const createOrder = async (amount: number) => {
  try {
    const { data: { order } } = await axios.post('/api/create-order', { amount })
    return order
  } catch (error) {
    return error
  }
}

export default createOrder