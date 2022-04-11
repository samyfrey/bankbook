import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showClient } from '../../../api/clients'
import './Client.scss'
import { Spinner } from 'react-bootstrap'

const ClientDetail = () => {
  const [borrower, setBorrower] = useState(null)
  const { borrowerId } = useParams()

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await showClient(borrowerId)
        setBorrower(res.data.client)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClient()
  }, [])
  console.log('borrower state is', borrower)

  if (!borrower) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    const totalAmount = borrower.loans.reduce((total, loan) => {
      return total + loan.amount
    }, 0)
    return (
      <>
        <p>{borrower.name}</p>
        <p>Industry: {borrower.industry}</p>
        <p>Loan table {borrower.loans.map(loan => (
          <ul key={loan._id}>
            <li>{loan.description}</li>
            <li>{loan.amount}</li>
          </ul>
        ))}</p>
        <p>Total loans: {totalAmount}</p>
      </>

    )
  }
}

export default ClientDetail