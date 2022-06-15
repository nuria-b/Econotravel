import axios from "axios"

const Postinfo= {
    async postAll(){  
        const result = await axios.post (process.env.REACT_APP_API_URL)
        return result.data    
    }
}

export default Postinfo;