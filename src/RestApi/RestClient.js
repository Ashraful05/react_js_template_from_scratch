import axios from "axios";

export default class RestClient{

    //get request
    static GetRequest=(getUrl)=>{
        return axios.get(getUrl).then(response =>{
            return response.data;
        }).catch(error =>{
            return null;
        })
    }

    //post request
    static PostRequest=(postUrl,postJson)=>{
            let config = {
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                }
            }

            return axios.post(postUrl,postJson,config).then(response=>{
                return response.data;
            }).catch(error=>{
                return null;
            })
    }
}