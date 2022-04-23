import React, { useState } from 'react'

import { postBudget } from '../../../api/budget'
import { BudgetTable } from '../../Table/BudgetTable'

const Budget = ({ user, revenueBudget, creditBudget, setRevenueBudget, setCreditBudget, budgets }) => {
  const [amount, setAmount] = useState()
  const [type, setType] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await postBudget(type, amount, user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='overview'>
      <div className="overview-container">
        <div className="overview-table">
          <div>
            <h1>Add Revenue Budget</h1>
            <form onSubmit={handleSubmit} >
              <input
                placeholder="type"
                name="revenue"
                type="text"
                value={type}
                onChange={event => setType(event.target.value)}
              />
              <input
                placeholder="amount"
                name="revenue"
                type="text"
                value={amount}
                onChange={event => setAmount(event.target.value)}
              />

              <button type="submit">create</button>
            </form>
          </div>
          <div className="title">Budget List </div>
          <BudgetTable budgets={budgets} revenueBudget={revenueBudget} creditBudget={creditBudget}/>
        </div>
      </div>
    </div>

  )
}

export default Budget
