import axios from 'axios'

export default class ProductService {
    getProducts(){
        return axios.get("http://localhost:8080/api/v1/products/getall");
    }

    getByProductName(productName){
        return axios.get(`http://localhost:8080/api/v1/products/getByProductName?productName=${productName}`);
    }
}


//http://localhost:8080/api/v1/products/getByProductName?productName=