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
    },

    async asyncfetchTodo(){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            return response;
        }catch(error){
            console.log("err =>", {error})
        }
    }
}

export default api;