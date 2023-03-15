import React from 'react'

export const Input = ({text,clicks,filters,mainss,SearchForproducts}) => {
 
  return (
    <>
   

      <div className="  flex justify-end">
         
     {
      mainss===false&&(
      <div className='flex flex-col items-center'>
            <input className='p-2 sm:w-[150px] md:w-[380px]' onChange={SearchForproducts}  placeholder='Search' type="search"></input>
          </div>
      )
}
       {
         mainss===true&&(
          <div className='flex flex-col items-center'>
            <input className='p-2 sm:w-[150px] md:w-[380px]' onChange={clicks}  placeholder='Search' type="search"></input>
         <ul  className={text.trim()?"bg-red-500 sm:w-[150px] md:w-[380px] h-[380px] overflow-scroll p-2":"hidden"}>
         
         
          {filters.length===0?(
            <li>no product found</li>):(
            filters.map((x)=>(
              <>
              <li className='w-[50px] h-[50px]'>{x.name}</li>
              <img className='w-[50px] h-[50px]' src={x.image} alt='pic'></img>
              </>
  
            )))
          }
        </ul>
          {/* <button onChange={x} className='flex flex-initial'>search</button> */}
         
          </div>
        )
        }
      </div>
      
  
    
        </>
  )
}
