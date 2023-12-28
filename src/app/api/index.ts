import axios from "axios"

export const getData = () =>{
    axios.get('http://localhost:3000/').then(res=>{
        console.log(res)
    }).catch(e=>{
        console.log(e)
    })
}