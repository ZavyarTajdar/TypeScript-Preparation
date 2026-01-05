import axios from 'axios'
import type { AxiosResponse } from 'axios'

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchdata = async() => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(`Todo ${response.data}`);
        
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching data:', error)
            if (error.response) {
                console.error('Response data:', error.response.data)
            }
        }
    }
}