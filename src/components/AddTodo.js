const AddTodo = (props) => {

    const { todo, setTodo, handleClickBtn } = props

    return (
        <div>
            {/* add new to do */}

            <label>Todo's Name: </label>
            <input value={todo} type="text"
                onChange={(event) => setTodo(event.target.value)} />
            <button type='submit' onClick={() => handleClickBtn()}> Submit</button>
            <br /><br />

        </div>
    )
}

export default AddTodo

