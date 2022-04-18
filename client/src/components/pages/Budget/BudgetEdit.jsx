import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { editBudget, showBudget } from '../../../api/budget'

const BudgetEdit = () => {
  const { budgetId } = useParams()
  const [selectBudget, setSelectBudget] = useState('')
  const [updatedAmount, setUpdatedAmount] = useState('')
  console.log('budget id is', budgetId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showBudget(budgetId)
        setSelectBudget(res.data.budget)
        console.log('res is', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log('selectBudget is', selectBudget)

  const handleSubmit = async event => {
    event.preventDefault()
    console.log('updated amount is', updatedAmount)
    try {
      await editBudget(budgetId, updatedAmount)
    //   setUpdatedBudget(true)
    } catch (error) {
      console.log(error)
    //   msgAlert({
    //     heading: 'Failed to load',
    //     message: error.message,
    //     variant: 'danger'
    //   })
    }
  }

  //   const amount = selectBudget.amount
  return (
    <div className='overview'>
      <div className="overview-container create">
        <div className="overview-table">
          <div className="title">Update {selectBudget.type}</div>

          <form className='create-client-form' onSubmit={handleSubmit} >

            <input type='text' placeholder='Type new amount' name='amount' value={updatedAmount} onChange={event => setUpdatedAmount(event.target.value)}/>
            <button className="button" type="submit">Update</button>

          </form>
        </div>
        {/* <div>
          <div>Hello</div>
        </div> */}
      </div>
    </div>
  )
}

export default BudgetEdit