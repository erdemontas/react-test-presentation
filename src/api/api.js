import axios from 'axios'

const api = {
    fetchTodo(){
        return axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        ).then((response) => {
            return Promise.resolve(response.data)
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default api;