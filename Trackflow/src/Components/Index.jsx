import React from 'react'

const Index = () => {
  return (
    <>
    <div className="container py-5 my-0">
       <div className="header-title">
         <h1 className='text-center'>Expense Tracker</h1>
        </div> 

        <div className="mt-4 d-flex flex-column justify-content-center align-items-center w-100">
            <div className='wrapper-box'>
              <div className="border-light px-5 py-4 rounded">
                <div className="mb-4">
                   <small className="text-uppercase fw-bold">Your Balance</small>
                     <h2>$176</h2>
                </div>

                <div className="d-flex justify-content-between text-center border-light rounded shadow-sm mb-2">
                    <div className="flex-fill p-3 border-light-end">
                        <small className='text-uppercase fw-bold d-block mb-1'>Income</small>
                        <span style={{color:'#4bc903', fontWeight:'600'}}>$700</span>
                    </div>
                    <div className="flex-fill p-3 ">
                        <small className='text-uppercase fw-bold d-block mb-1'>Expense</small>
                        <span style={{color:'#ff0000', fontWeight:'600'}}>$700</span>
                    </div>
                </div>
                </div>  
            </div>
        </div>

    </div>
    </>
  )
}

export default Index