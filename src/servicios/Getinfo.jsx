export default function Getinfo(){
    return fetch('./api/db.json')
             .then(res => res.json)
                 .then(data => {
                     data.map(exp => {
                     const {id, img, experiencia, descripcion, precio, duracion,accesibilidad, etiquetas} = exp;
                     })
                     return {id, img, experiencia, descripcion, precio, duracion,accesibilidad, etiquetas};
                 }) 
 }
 