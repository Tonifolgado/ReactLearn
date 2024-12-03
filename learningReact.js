


//Ways to Fetch data in React JS

//fetch() method is used to request to the server and load the information in the webpage
//The request can be of any APIs that return the data in JSON format or XML
//This method returns a promise
import { useEffect } from 'react'
function App() {
    useEffect(() => {
        fetch('https://site.com/')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);
    return (
        <div>
            <h1>React Fetch API</h1>
        </div>
    );
}

//Async-Await is the preferred way of fetching data from an API
//It enables to remove the .then() callbacks and return asynchronously resolved data
//in the async block we can use Await function to wait for the promise
function App2() {
    useEffect(() => {
        (async () => {
            try{
            const result = await axios.get('https://site.com/')
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    })()
})
return 
    <div>
        <h1>React Fetch API</h1>
    </div>
}

//Axios library
//With it we can easily send asynchronous HTTP requests to REST APIs & perform 
//create, read, update and delete operations
import axios from 'axios'
import { useState } from 'react'
function App3() {
    useEffect(() => {
        axios.get('https://site.com/')
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h1>React Fetch API</h1>
        </div>
    );
}

//Custom Hook
//React component whose name start with "use" like useFetch
const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [url])
    return data
}

//React Query Library
//It provides support for caching and refetching
import axios from 'axios'
import { useQuery } from 'react-query'
function App4() {
    const { data, isLoading, isError } = useQuery('posts', () => {
        return axios.get('https://site.com')
    })
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }
    return (
        <div>
            <h1>React Fetch API</h1>
            {data && data.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}