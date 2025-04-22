import { useState } from 'react'
import avatar from '../assets/images/blank-profile-picture-973460_1280.webp'


const Profile = () => {

    const [myProfile, setMyProfile] = useState({
        firstname: "David",
        lastname: "WILS",
        job: "Formateur ISTQB",
        city: "Lille",
    })

    const { firstname, lastname, job, city } = myProfile

    return (
        <>
        <header>
            <img src={avatar} alt="ma photo de profile" height={100} />

            <div id="profile">
                <h1>{firstname} {lastname}</h1>
                <h3>{job}</h3>
                <h3>{city}</h3>
            </div>
        </header>
        </>
    )
}

export default Profile
