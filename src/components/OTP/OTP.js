import GenerateOTP from "./GenerateOTP"
import InputOTP from "./InputOTP"
import "./OTP.scss"
import { useState } from "react"
import CountDownAnimation from "./CountDownAnimation"

const OTP = () => {
    const [orgOTPParent, setOrgOTPParent] = useState("")
    const [useOTPParent, setUserOTPParent] = useState("")
    const [isDisableBtn, setIsDisableBtn] = useState(false) // vẫn cho người dùng click

    const handleSubmitOTP = () => {

        if (!orgOTPParent) {
            alert("Please generate an OTP...")
            return
        }

        if (!useOTPParent) {
            alert("Please enter an OTP...")
            return
        }

        if (+orgOTPParent === +useOTPParent) { // "+" convert to number
            alert("CORRECT OTP")
        }
        else {
            alert("WRONG OTP")
        }
    }

    return (
        <div className="otp-parent-container">
            {/* <CountDownAnimation /> */}
            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                setUserOTPParent={setUserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}
export default OTP


