import { useState, useRef } from 'react'
import OtpInput from 'react-otp-input'
import CountDown from './CountDown'
import CountDownAnimation from './CountDownAnimation'

const InputOTP = (props) => {
    const childRef = useRef()
    const [otp, setOtp] = useState("")
    // biến otp là thư viện cho chúng ta, không phải là biến otp state của chúng ta.

    const handleChange = (otp) => {
        setOtp(otp)
        props.setUserOTPParent(otp)
    }

    const handleConfirmOTP = () => {
        props.handleSubmitOTP()
    }

    const handleClearBtn = () => {
        childRef.current.resetTimer()//thuộc tính .current nó sẽ trả lại tất cả những giá trị của ref này
        console.log(">>> check ref: ", childRef)
    }

    return (
        <div className='input-otp-container'>
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />

            <div className='timer'>
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef} // component InputOTP và CountDownAnimation được link với nhau bởi ref
                />

            </div>

            <div className='action'>
                <button className='clear'
                    onClick={() => handleClearBtn()}
                    disabled={!props.isDisableBtn}
                >Clear</button>
                <button className='confirm'
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOTP()}
                >Confirm</button>
            </div>
        </div>
    )
}
export default InputOTP


