import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4fdaa7b46f0d44fd8d4c927ccfd115eb'
    }
})