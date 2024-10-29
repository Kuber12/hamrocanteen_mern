import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar';

const About = () => {
    
    const[data,setData] = useState([]);

    const  handleChange = (e)=>{
        const {checked,value} = e.target
        console.log(value)
        if(checked){
            setData([...data,value])
        }else{
            setData(data.filter((i)=>i!==value))
        }
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
    <>
    <NavBar/>
    </>
  )
}

export default About
