import './Dashboard.scss'
import React, { useEffect } from 'react'
import LoansTable from '../Loans/LoansTable'
import ChartLine from '../../Table/Chart'
import { Spinner } from 'react-bootstrap'
import ProgressChart from '../../Table/ProgressChart'
import NewsFeed from '../../News/NewsFeed'
import { actualRevData, lastYearRevenueBudget } from '../../../globalData'
import { loanExtractor, grouping, cumulator, grandTotalRev } from '../../../dataManipulation'

export const Dashboard = ({ creditBudget, revenueBudget, clients, RevChartData, setRevChartData, user, msgAlert, setRender, setSelectClient }) => {
  const budgetData = {
    thisYearBudget: revenueBudget,
    ytdRev: grandTotalRev(clients),
    lastYearBudget: lastYearRevenueBudget

  }

  const progress = (budgetData.ytdRev * 100) / budgetData.thisYearBudget
  const differenceYTD = budgetData.thisYearBudget - budgetData.ytdRev

  const budgetStat = {
    progress: progress,
    differenceYTD: differenceYTD
  }

  useEffect(() => {
    const loans = loanExtractor(clients)
    const groupedLoans = grouping(loans)
    const finalArray = cumulator(groupedLoans)
    const finalChartData = pushDataToActual(finalArray)
    setRevChartData(finalChartData)

    function pushDataToActual (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (actualRevData[i].month === arr[i].month) {
          actualRevData[i].thisYearRev = arr[i].revenue
        }
      }

      return actualRevData
    }
  }, [])

  if (!RevChartData && !budgetData) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  return (
    <div className='dashboard'>

      <div className="dashboard-container">
        <div className="charts">

          <ChartLine className="container-box revenue-chart" title="Year-over-Year Revenue ($MM)" aspect={3 / 1} data={RevChartData}/>
          <ProgressChart className="progress-chart"title="YTD Revenue to Budget" data={progress} budgetData={budgetData} budgetStat={budgetStat} />
        </div>
        <div className="container-box">
          <div className="title">Latest Transactions</div>

          <LoansTable clients={clients} user={user} msgAlert={msgAlert} setRender={setRender} setSelectClient={setSelectClient}/>
        </div>

        <div className="container-box">
          <div className="title">Latest News</div>
          <NewsFeed/>
        </div>
      </div>

    </div>
  )
}
