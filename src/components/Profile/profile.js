import React, {useState, useEffect} from 'react';
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileReview from "./profile-review";
import {findProfileById} from "../../services/profile-service";
import {Link, useParams} from "react-router-dom";

const Profile = ({user}) => {
    const {uid} = useParams();
    const [currentProfile, setCurrentProfile] = useState({});

    const isAdmin = user && user.role === "ADMIN";
    const adminId = isAdmin && user._id;
    const userId = uid;
    const editable = (userId == null || adminId === userId);

    useEffect(() => {
        if(uid) {
            findProfileById(uid)
                .then((profile) => {
                    setCurrentProfile(profile)
                })
        }
    }, [uid])
    return (
        <>
            <h1>Profile</h1>
            <h1 className='rose-red'>Profile </h1>
            {
                isAdmin && <Link className="btn btn-primary" to="/profiles" style={{margin:"10px"}}>
                    Admin Panel to manage users!
                </Link>
            }
            {!user && !uid &&
            <>
                <div className='alert alert-warning'>
                    Not logged in
                </div>
                <Link className='btn btn-outline-primary' to='/login'>Back to login page</Link>
            </>
            }
        </>
    )
}
export default Profile;