import React, { useState } from 'react'
import { products } from './data/data'
let arr=products



export const Shuffle=((x, setshuffle)=>{
  if (x) {
    setshuffle(false)
    // console.log(arr)
    
    return arr.sort(()=>Math.random() - 0.5 )
  }
  
})
export const Revser=((x,setRevers)=>{

  
 
   
    
    return arr.sort((a,b)=>-1)
  

})


const Tabs =(x,setrevers) => {
 return  arr.reduce((a,c)=>{
        
            let names=c.name;
            
            
                if (!a[names]) {
                     a[names]=[]
                
                    }
                    a[names].push(c)
                    
                    return a
                    
                },{})
      
   

    
    
    
    
    
}

	// function checkAvailability(arr, val) {
	// 	return arr.some(function (arrVal) {
	// 		return  arrVal.name.toLowerCase().includes(val.toLowerCase());
	// 	});
	// }
  // if (filterText && filterText !== "") {
  //   const projectsFilteredByName = projects.filter((project) => {
  //     return (
  //       project.projectType?.some(({ name }) =>
  //         name.toLowerCase().includes("nfts")
  //       ) && project.name.toLowerCase().includes(filterText.toLocaleLowerCase())
  //     );
  //   });
  const checkAvailability=(arr,val)=>{
    let n= products.filter(({name})=>(name.toLowerCase().includes(val.toLowerCase())))
    return n
              

  }
	function func() {
		// Original function
		var arr = products;

		// Checking for condition
		console.log(checkAvailability(arr, "Shir"));
	
	}
	func();



export default Tabs