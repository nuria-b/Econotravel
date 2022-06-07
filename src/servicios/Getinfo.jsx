export default function Getinfo(){
    return fetch('api/db.json')
             .then(res => res.json())
                 .then(data => {
                     console.log(data)
                     return data.experiencias;
                 }) 
 }
 