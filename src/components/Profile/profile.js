import React, {useState, useEffect, Fragment} from 'react';
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileReview from "./profile-review";
import {findProfileById} from "../../services/profile-service";
import {Link, useParams} from "react-router-dom";

const Profile = ({user, setUser}) => {

    const {uid} = useParams();
    const [profileType, setProfileType] = useState("About");
    const [currentProfile, setCurrentProfile] = useState({});



    const isAdmin = user && user.role === "ADMIN";
    const adminId = isAdmin && user._id;
    const userId = uid;
    const editable = (userId == null || adminId === userId);

    useEffect(() => {
        if(uid) {
            profileService.findProfileById(uid)
                .then((profile) => {
                    setCurrentProfile(profile)
                })
        }
    }, [uid])
    return (
        <Fragment>
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
            {
                (user || uid) &&
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="profile-bio col-md-4">
                                <ProfileBio user={user} setUser={setUser} saveProfile={saveProfile} editable={editable} currentProfile={currentProfile}/>
                                <div className="list-group col-md-10">
                                    <button type="button"
                                            className="list-group-item"
                                            name="bio"
                                            onClick={(e) => setProfileType("About")}>
                                        About Me
                                    </button>
                                    <button type="button"
                                            className="list-group-item"
                                            name="bio"
                                            onClick={(e) => setProfileType("Review")}>
                                        My Reviews
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-8">
                                {
                                    editable &&
                                    <h2 className="rose-red">{user.firstName} {user.lastName}'s Profile</h2>
                                }
                                {
                                    !editable &&
                                    <h2>{currentProfile.firstName} {currentProfile.lastName}'s Profile</h2>
                                }
                                <div className="row">
                                    <div className="col-md-8">
                                        {
                                            profileType === "About" &&
                                            <ProfileAbout user={user} setUser={setUser} saveProfile={saveProfile} editable={editable} currentProfile={currentProfile}/>
                                        }
                                        {
                                            profileType === "Review" &&
                                            <ProfileReview user={user} editable={editable} currentProfile={currentProfile}/>
                                        }
                                    </div>
                                    <div className="col-md-4">

                                        <ProfileFavorite user={user} editable={editable} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </Fragment>

    )
}
export default Profile;