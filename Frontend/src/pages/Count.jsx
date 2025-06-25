import { useState,useEffect } from 'react'
import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Count(){
    const[count,setCount] = useState(0)

    const navigate = useNavigate()

    const increaseCount=()=>{
        setCount(count + 1)
    }

    const decreaseCount= () =>{
        setCount(count - 1)
    }

    const resetCount = () =>{
        setCount(0)
    }

    //in case [] diyana bhane page ma any change j aaye pani run hunxa,[] matra bhayo bhane page reload huda matra aauxa,

    useEffect(()=>{
        alert('hello world')
    },[count])


    const handleClick=()=>{
        navigate('/home')
    }

    

    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={resetCount}>Reset</button>

        <button onClick={handleClick}>Home</button>

        </>
    )
}

export default Count