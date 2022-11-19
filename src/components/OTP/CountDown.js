import { useEffect, useState } from "react"

const CountDown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true) // khi bằng 0 thì disable
            return
        }
        const timer = setInterval(() => {
            setCount(count - 1) // After 1 second it will use setCount again
        }, 1000)

        return () => {
            clearInterval(timer)
        }

    }) // biến count = componentDidUpdate; xem lesson 24 trang 82.


    return (
        <div>
            {count}
        </div>
    )
}
export default CountDown



// import React from "react";

// class CountDown extends React.Component {

//     constructor(props) {
//         console.log(">>> run contructor")
//         super(props)
//         this.state = {
//             count: 10
//         }
//     }

//     componentDidMount() {
//         console.log(">>> run DidMount")
//         this.timer = setInterval(() => {
//             //Đặt this ở đây, chúng ta có thể truy cập được biến timer này ở nơi khác.
//             let currentCount = this.state.count
//             this.setState({
//                 count: currentCount - 1
//             })
//         }, 1000)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(">>> run DidUpdate", "currentState = ", this.state, "prevState: ", prevState)

//         if (this.state.count !== prevState.count && this.state.count === 0) {
//             if (this.timer) {
//                 clearInterval(this.timer)
//             }
//         }
//     }

//     render() {
//         console.log(">>> run render")
//         return (
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }
// export default CountDown





