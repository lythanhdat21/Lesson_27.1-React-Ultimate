import React, { useState } from 'react'
import _ from 'lodash'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'

const Home = () => {
    const [todo, setTodo] = useState('')
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: "Watching youtube" },
            { id: 'todo2', name: "Using facebook" },
            { id: 'todo3', name: "Reading book" }
        ]
    )


    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClickBtn = () => {

        if (!todo) {
            alert("Todo's name is not empty")
            return
        }

        let todoId = randomIntFromInterval(4, 999999999)
        let todoItem = {
            id: `todo${todoId}`, name: todo // string template
        }

        let currentTodoList = _.clone(listTodo)
        currentTodoList.push(todoItem)
        setListTodo(currentTodoList)
        setTodo("")

        // setListTodo([...listTodo, todoItem])
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo)
        currentTodoList = currentTodoList.filter(item => item.id !== id)
        setListTodo(currentTodoList)
    }

    const myInfor = { channel: "hoi dan it", age: 30 }
    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}
            />

            {/* <label>Todo's Name: </label>
            <input value={todo} type="text"
                onChange={(event) => setTodo(event.target.value)}
            />
            <button type='submit' onClick={() => handleClickBtn()}> Submit</button>
            <br /><br /> */}

            <DisplayTodo
                childData={listTodo}
                name={"Tony Lee"}
                myInfor={myInfor}
                deleteTodoInParent={handleDeleteTodo}
            />
        </div>
    )
}
export default Home


