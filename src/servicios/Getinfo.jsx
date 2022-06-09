import axios from "axios"

const Getinfo= {   
    async getAll(){    
       const result = await axios.get ({
            method: 'GET',
            url: ' http://localhost:1234/experiencias'
        })
        
        return result.data    
    }       
}

export default Getinfo;