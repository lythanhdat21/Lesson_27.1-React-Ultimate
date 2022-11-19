import { useState } from "react"

const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("")

    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000)
        setOrgOTP(otp) //OTP will be re-updated
        props.setOrgOTPParent(otp) // Component parent đã được cập nhật lại State
    }

    return (
        <div className="generate-otp-container">
            <button onClick={() => handleClickBtn()}>Generate OTP</button>

            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}
export default GenerateOTP


