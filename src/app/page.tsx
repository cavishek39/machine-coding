'use client'
import { useState } from 'react'

export default function Home() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const calculateAge = (
    ipDay: string,
    ipMonth: string,
    ipYear: string
  ): { days: number; months: number; years: number } => {
    console.log(ipDay, ipMonth, ipYear)
    if (!ipDay || !ipMonth || !ipYear) return { days: 0, months: 0, years: 0 }

    const birthDate = new Date(`${ipYear}-${ipMonth}-${ipDay}`)
    const today = new Date()
    const diffTime = Math.abs(today - birthDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffMonths = Math.ceil(diffDays / 30)
    const diffYears = Math.ceil(diffDays / 365)

    return { days: diffDays, months: diffMonths, years: diffYears }
  }

  const { days, months, years } = calculateAge(day, month, year)

  console.log(days, months, years)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100'>
      <div className='z-10 w-full max-w-5xl items-center justify-evenly font-mono text-sm lg:flex'>
        <>
          <input
            placeholder='DD'
            className='m-2 w-16 h-10 text-lg font-semibold text-center text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            onChange={(e) => setDay(e.target.value)}
          />
          <input
            placeholder='MM'
            className='m-2 w-16 h-10 text-lg font-semibold text-center text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            onChange={(e) => setMonth(e.target.value)}
          />
          <input
            placeholder='YYYY'
            className='m-2 w-16 h-10 text-lg font-semibold text-center text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            onChange={(e) => setYear(e.target.value)}
          />
        </>
      </div>
      <div className='h-1 w-full bg-slate-400 my-4' />
      <div className='flex flex-col items-center justify-center'></div>

      <h1 className='text-7xl italic text-violet-700'>
        {!!days ? days : '--'} Days
      </h1>
      <h1 className='text-7xl italic text-violet-700'>
        {!!months ? months : '--'} Months
      </h1>
      <h1 className='text-7xl italic text-violet-700'>
        {!!years ? years : '--'} Years
      </h1>
    </main>
  )
}
