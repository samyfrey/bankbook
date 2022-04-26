export function loanExtractor (array) {
  const selectLoans = []
  for (let i = 0; i < array.length; i++) {
    const selectBorrower = array[i].loans
    for (let j = 0; j < selectBorrower.length; j++) {
      const eachLoan = selectBorrower[j]
      selectLoans.push(eachLoan)
      // console.log('select loan is', selectLoans)
    }
  }
  return selectLoans
}

export function grouping (array) {
  const res = Array.from(
    array.reduce(
      (accumulator, { month, revenue }) =>
        accumulator.set(month, (accumulator.get(month) || 0) + revenue),
      new Map()
    ),
    ([month, revenue]) => ({ month, revenue })
  )
  return res
}

export function cumulator (array) {
  const newArray = array.map((obj, index, self) => {
    if (index === 0) return obj

    const prevO = self[index - 1]
    obj.revenue += prevO.revenue
    return obj
  })
  return newArray
}

export function grandTotalRev (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    const selectBorrower = array[i].loans
    for (let j = 0; j < selectBorrower.length; j++) {
      const result = selectBorrower[j].revenue
      sum += result
    }
  }
  return sum
}
