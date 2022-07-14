import axios from "axios"

const createOrder = async (amount: string) => {
  try {
    const { data: { order } } = await axios.post('/api/create-order', { amount })
    return order
  } catch (error) {
    return error
  }
}

export default createOrder