import React, { useState } from 'react'

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
    <div>
        {data.map((i)=>(
            <ul>
                <li>{i}</li>
            </ul>
        ))}
        <h1>check box</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Sunday</label>
            <input onChange={handleChange}  value={"sunday"} type="checkbox" />
        </div>
        <div>
            <label htmlFor="">Monday</label>
            <input  onChange={handleChange}   value={"monday"} type="checkbox" />
        </div>
        <div>
            <label htmlFor="">Tuesday</label>
            <input  onChange={handleChange}  value={"tuesday"} type="checkbox" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default About
