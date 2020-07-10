import React from 'react'
import nutritionRequest from './utils/utils.js'
import {useEffect, useState} from 'react'


const Request = () => {
  const input = "red apple"
  const [nutritionValues, setNutritionValues] = useState("")

  useEffect(() => {
    nutritionRequest(input)
    .then((res) => {
      setNutritionValues(JSON.stringify(res.data.parsed[0].food.nutrients)) 
    })
    .catch(err => {
      console.log("somethings said no");
      console.log(err);
    })
  }, [])

  return (
      <div>
          <h1>food</h1>
          {nutritionValues}
      </div>
  )
}

export default Request