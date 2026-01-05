interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchdata = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data: Todo = await response.json()
        console.log(`Todo ${data}`);
        
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
    }
}