const Confirm = ({values , nextStep , previousStep }) => {

    return(
        <div>
        <ul>
            <li>{values.firstName}</li>
            <li>{values.lastName}</li>
            <li>{values.email}</li>
            <li>{values.occupation}</li>
            <li>{values.city}</li>
            <li>{values.bio}</li>
        </ul>
        <button type="submit" onClick={previousStep}>Previous</button>
        <button type="submit" onClick={nextStep}>Next</button>   

        </div>
     
    )

}

export default Confirm