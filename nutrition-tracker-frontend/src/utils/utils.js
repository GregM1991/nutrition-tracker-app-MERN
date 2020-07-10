import axios from 'axios'

const app_id="3f98b43e"
const app_key="f762becbb9106daaf739d80c61c615d6"
let link = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=`


const nutritionRequest = (food) => {
  let nutritionValues = null

  return axios.get(link + encodeURIComponent(food))
  // return nutritionValues
}


export default nutritionRequest

