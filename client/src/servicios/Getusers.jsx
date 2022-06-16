import axios from "axios"

const Getusers= {   
    async getAll(){  
        const result = await axios.get (process.env.REACT_APP_USERS_URL)
        return result.data    
    }       
}

export default Getusers;