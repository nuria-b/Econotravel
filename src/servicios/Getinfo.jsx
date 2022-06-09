import axios from "axios"

const Getinfo= {   
    async getAll(){  
       const result = await axios.get (process.env.REACT_APP_API_URL)
          return result.data    
    }       
}

export default Getinfo;