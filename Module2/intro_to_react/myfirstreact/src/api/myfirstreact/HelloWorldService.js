import axios from 'axios';
//import qs from "qs";

class HelloWorldService {
    executeHelloWorldService(){
        console.log('executed service')
        //return axios.get('http://localhost:8070/hello-world')
        //return axios.get('http://localhost:9000/api/users')
        return axios.get('http://localhost:9000/api/users')
        //return axios.get('http://localhost:9000/api/bgtext')
        
    }
    executeHelloWorldServicePost(user){
        console.log('executed service')
        //return axios.get('http://localhost:8070/hello-world')
        //return axios.get('http://localhost:9000/api/users')
        return axios.post('http://localhost:9000/api/users', user)
        //return axios.get('http://localhost:9000/api/bgtext')
        
    }
    executeHelloWorldBeanService(){
        console.log('executed bean service')
        return axios.get('http://localhost:8070/hello-world-bean')
    }
    executeHelloWorldPathVariableService(name){
        console.log('executed path variable service')
        return axios.get(`http://localhost:8070/hello-world/path-variable/${name}`)
    }

}
//hello-world/path-variable/
export default new HelloWorldService()