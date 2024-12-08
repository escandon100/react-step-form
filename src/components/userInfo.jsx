import { useState } from "react"
import UserInfoPersonalDetails from "./userInfoPersonalDetails"
import Confirm from "./confirm"
import Success from "./success"

const UserInfo = () => {

    const [state , setState] = useState({
        step : 1 ,
        firstName : "",
        lastName : "",
        email : "",
        occupation : "",
        city : "",
        bio : ""
    })

    const nextStep = (e) => {
        e.preventDefault()
        setState((pre) => {
            return {
            ...pre,
            step : state.step + 1 }
        })
        
    }
    const previousStep = (e) => {
        e.preventDefault()
        setState((pre) => {
            return {
            ...pre,
            step : state.step - 1 }
        })
        
    }
    const handleChange = (input) => (e) => {
        e.preventDefault()

        setState((pre)=>{
            return {
                ...pre,
                [input] : e.target.value
            }
           
        })
      
        
    }

    const {firstName , lastName , email , occupation , city , bio} = state



    const values = {firstName , lastName , email , occupation , city , bio}

    
    switch (state.step) {
        case 1 :
            return(
                <>
                    <form action="">
                        <label>First Name</label>
                        <input onChange = {handleChange("firstName")} value= {firstName}  type="text" /><br />
                        <label>Last name</label>
                        <input onChange = {handleChange("lastName")} value= {lastName}  type="text" name="" id="" /><br />
                        <label>Email</label>
                        <input type="email" onChange = {handleChange("email")} value= {email}  name="" id="" /><br />
                        <button onClick = {nextStep} type="submit">Next</button>
                    </form>

                
                </>
            )
        case 2 :
            return < UserInfoPersonalDetails nextStep = {nextStep} previousStep = {previousStep} handleChange = {handleChange}  values = {values}
            />
        case 3 :
            return <Confirm values= {values}  nextStep = {nextStep} previousStep = {previousStep} />
        case 4 :
            return <Success />
    
        default:
            break;
    }



 


    


}

export default UserInfo