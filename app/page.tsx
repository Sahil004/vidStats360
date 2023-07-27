import Image from 'next/image'
import React from 'react'
import DefaultCard from './components/cards/DefaultCard'
import ShareIcon from './components/icons/ShareIcon'
import Chart from './components/visualizations/Chart'
import LineChart from './components/visualizations/Chart'

export default function Page() {
  return (
    <main className="min-h-screen p-6 max-w-7xl m-auto">
      <div className='grid gap-5'>
        <DefaultCard>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
          {
            React.Children.toArray(
              [1,2,3].map((item, index, arr) => {

                const isThirdElement = ((((index % 3) === 0) && (index > 0)) || (index === (arr.length -1)))
                const isLastElement = (index === (arr.length -1))

                return (
                  <div className={`${(isThirdElement || isLastElement) ? '': 'lg:border-r lg:border-r-lightText lg:pr-8 lg:mr-8 lg:border-b-0 lg:pb-0 lg:mb-0 border-b border-b-lightText pb-6 mb-6'} flex justify-between`}>
                    <div>
                      <div className='text-xs font-medium text-lightText uppercase'>Streaming Usage</div>
                      <div className=' mt-2 text-2xl font-medium'>381 Hr 22 Min</div>
                    </div>
                    <div><ShareIcon /></div>
                  </div>
                )
              }) 
            )
          }
          </div>
        </DefaultCard>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {
            React.Children.toArray(
              [1,2,3,4].map((item, index, arr) => {

                return (
                  <DefaultCard className='!p-0'>
                    <div className='border-b border-b-lightText p-5 font-medium'>
                      Streaming Usage
                    </div>
                    <div className='p-5'>
                      {index === 3? <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium border-lightText bg-bodyBg">
                                  <tr>
                                    <th scope="col" className="px-6 py-4">First</th>
                                    <th scope="col" className="px-6 py-4">Last</th>
                                    <th scope="col" className="px-6 py-4">Handle</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-lightText">
                                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                  </tr>
                                  <tr className="border-b border-lightText">
                                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                  </tr>
                                  <tr className="border-b border-lightText">
                                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>: <>
                        <Chart />
                        {/* <LineChart /> */}
                      </>}
                    </div>
                  </DefaultCard>
                )
              }) 
            )
          }
        </div>
      </div>
    </main>
  )
}
