const UserInfoPersonalDetails = ({nextStep , previousStep , handleChange , values}) => {
    return (
        <>
            <form action="">
                <label htmlFor="">Occupation</label>
                <input type="text" value = {values.occupation} onChange = {handleChange("occupation")} /><br />
                <label htmlFor="">City</label>
                <input type="text" value={values.city} onChange = {handleChange("city")} /><br />
                <label htmlFor="">Bio</label>
                <input type="text" value={values.bio}  onChange = {handleChange("bio")}/><br />
                <button type="submit" onClick={previousStep}>Previous</button>
                <button type="submit" onClick={nextStep}>Next</button>   
            </form>
        </>
    )

}


export default UserInfoPersonalDetails