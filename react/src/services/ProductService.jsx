import axios from 'axios'

export default class ProductService {
    getProducts(){
        return axios("http://localhost:8080/api/v1/products/getall");
    }
}