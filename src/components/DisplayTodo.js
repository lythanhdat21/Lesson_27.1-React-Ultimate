const DisplayTodo = (props) => {

    const deleteTodoFromChild = (id) => {
        props.deleteTodoInParent(id)
    }

    const listTodo = props.childData
    // const fff = props.myInfor
    // const a = props.name

    return (
        <div>
            <div>---- List todo ---- </div>
            {listTodo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => deleteTodoFromChild(item.id)}> {item.name} </div>
                )
            })}
            {/* <div>{JSON.stringify(fff)}</div>
            <div>{a}</div> */}
        </div>
    )
}

export default DisplayTodo


