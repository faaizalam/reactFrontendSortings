import React from 'react'

const Header=(()=>{
    return(
        <header className='flex justify-between  text-white bg-black items-center pr-20 pl-20' >
            <div>MyEcommerce</div>
            <div>
                <span>cart</span>
                <span>login</span>
            </div>
        </header>
    
    )
})
const Footer=(()=>{
    return(
        <footer className='flex justify-center text-white bg-black items-center pr-20 pl-20' >
          <div>

          no copy rights @2023
          </div>
        </footer>
    
    )
})



export const Layout = ({ children }) => {
  return (
    
    <div className='grid'>

   <Header />
   <main className="flex flex-col w-full h-full">
   {children}

   </main>
   <Footer/>
    
    
    </div>
  )
}
