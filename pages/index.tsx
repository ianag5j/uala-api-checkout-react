import type { NextPage } from 'next'
import Head from 'next/head'
import createOrder from '../services/createOrder'
import {useState} from 'react'

const Home: NextPage = () => {
  const [orderUrl, setOrderUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const onClick = async () => {
    const amountElement = document.getElementById('amount') as HTMLInputElement
    const amount = parseInt(amountElement.value, 10)
    if (amount > 0) {
      try {
        setIsLoading(true)
        const order = await createOrder(amount.toString())
        setIsLoading(false)
        setOrderUrl(order.links.checkoutLink)
      } catch (error) {
        
      }
    }
    
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          <input className='p-3 border-b mr-3' type="number" placeholder='amount' name='amount' id='amount' />
          <button className='bg-blue-400 disabled:bg-gray-400 p-3 rounded' onClick={onClick} disabled={isLoading}>
            {isLoading ? 'Cargando': 'Crear'}
            </button>
        </div>
        {
          orderUrl && <a className="p-3 bg-gray-200 rounded my-2 text-blue-400" href={orderUrl} target="_blank" rel="noopener noreferrer">Checkout</a>
        }
        <div>
          <iframe src={orderUrl} frameBorder="0"></iframe>
        </div>
      </main>
    </div>
  )
}

export default Home
