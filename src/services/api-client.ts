import  axios  from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f541e0c59040464db7c58f903ba25d0d'
    }
   
})