import React, { useEffect, useState } from 'react'
import Tabss from '../component/tabs'
import { products } from './data/data'
import { Shuffle } from '../component/tabs'
import { Revser } from '../component/tabs'
import { Input } from '../component/Input'
import Badge from 'react-bootstrap/Badge';
import { MdOutlineShuffle } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const Hometabs = (props) => {
 
  // console.log(props.s(),"jj")


  // let filterpro=[]
  const [datas, setdata] = useState("")
  const [Serachfilter, setSerachfilterval] = useState("")

  const [shuffle, setshuffle] = useState(false)
  const [revers, setRevers] = useState(false)
  const [filterpro, setFilterpro] = useState([])
  const [mainSerach, setMainsearch] = useState("")
  useEffect(() => {
    if (shuffle) {

      Shuffle(shuffle, setshuffle)

    }



  }, [shuffle])
  useEffect(() => {

    if (revers) {

      Revser(revers, setRevers)
      console.log(revers)
    } else if (!revers) {
      Revser(revers, setRevers)
      console.log(revers)
    }

  }, [revers])


  const serachbar = ((e) => {
    setSerachfilterval(e.target.value)


  })
  // var filterpro =null
  let AllFlteritem;
  let projectElements=null
  let alternative=null
  useEffect(() => {
    if (Serachfilter) {

      setFilterpro(products.filter((x) => x.name.toLowerCase().includes(Serachfilter.toLocaleLowerCase())))



    }
  }, [Serachfilter])
  // if (!mainSerach.trim()) {
  // console.log("hh")
  const Alls = (() => {

    if (!mainSerach.trim()&&mainSerach===""){

      
      return (
        
        
        
        
        <div className='flex flex-col w-30'>
      
        <div className='flex flex-col'>{Object.keys(props.s()).map((x) => (
          <div className="w-15">
          <h1 className="bg-black-500">{datas ? datas === x && x : x}</h1>
          {props.s()[x].filter((x) => datas ? x.name === datas : true).map((x) => (
            <>
                <div>{x.price}</div>
                <img className="h-10" src={`${x.image}`} alt="img"></img>
              </>
            ))}
            </div>
            ))}</div>
          
            </div>
            
            )
          }
            

          
  })

  // }

  const SearchForproducts = ((e) => {

    setMainsearch(e.target.value)
  })




  // useEffect(()=>{
    // const MainserachFunction = (() => {
   
   let n=null
    if (mainSerach.trim()&&mainSerach!=="") {
     projectElements = Object.keys(props.s()).map((item) => {
        return (
      props.s()[item].filter((x) => mainSerach.trim().length > 0 && x.name.toLowerCase().includes(mainSerach.toLocaleLowerCase())
            )
            // .map((m)=>
            // {
            //   return(
            //     <div className="w-15">
            //     <>
   
            //     <div>{m.price}</div>
            //     <img className="h-10" src={`${m.image}`} alt="img"></img>
            //   </>
            //   </div>
            //   )
            // }

            
            // )
            

          
         )
          
    
         
         
         
        })

      if (projectElements[0].length > 0 || projectElements[1].length > 0 || projectElements[2].length>0) {
        
        
        
       alternative=projectElements.map((x)=>
        
            
                x.map((m)=>
            {
              return(
                <div className="w-15">
                <>
   
                <div>{m.name}</div>
                <img className="h-10" src={`${m.image}`} alt="img"></img>
              </>
              </div>
              )
            }

            
            )
            

            
            )
            
         
          
          
         
            console.log(alternative,"gg")
          
        }else{
          alternative=<div>no product</div>
        }
       
        
        
        
      }
  // })



  // },[mainSerach, props])
  // const MainserachFunction=(()=>{
  //  const Filtered=Object.keys(props.s()).filter((x)=>{

  //        let n =  mainSerach.trim().length> 0 && x.toLowerCase().includes(mainSerach.toLocaleLowerCase())
  //        return n


  //   })

  //   // return(
  //   //   <div className='flex flex-col w-30'>
  //   //      <div className='flex flex-col'>
  //   //       {Object.keys(props.s()).map((x)=>(
  //   //         <div className="w-15">
  //   //           {

  //   //           }
  //   //           </div>
  //   //       ))}
  //   //       </div>


  //   // </div>


  //   // )
  // })



  return (
    <div className="flex flex-col">
      <div className='  flex justify-end'>
        <div>
          <Input value={mainSerach} SearchForproducts={SearchForproducts} mainss={false} />
        </div>
        <button onClick={() => setRevers((pre) => !pre)} className="bg-black text-white  w-70 m-3">{revers ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</button>
        <button onClick={() => setshuffle((pre) => !pre)} className="bg-black text-white  w-70 m-3">{<MdOutlineShuffle />}</button>
      </div>
      <div className="w-full flex justify-center"  >


        <Badge onClick={() => setdata("")} className="bg-black text-white  w-70 m-10" type='button'>All</Badge>
        {
          Object.keys(props.s()).flatMap((x) => (
            <>
              <div key={x}>
                {/* <Badge bg="secondary" as="Button">
                <Badge/> */}
                <Badge onClick={() => setdata(x)} className="bg-black text-white  w-70 m-10" type='button'>{x}</Badge>



              </div>

            </>


          ))



        }

      </div>
      <Input text={Serachfilter} clicks={serachbar} mainss={true} filters={filterpro} />
      {/* {projectElements} */}
      {Alls()}
      {alternative}
      {/* {MainserachFunction()} */}


    </div>


    // </div>
  )
}


export default Hometabs
