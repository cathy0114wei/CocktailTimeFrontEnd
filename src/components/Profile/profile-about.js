import React, {useState} from 'react';

const ProfileBio = () => {
    const [editing, setEditing] = useState(false);
    return (
        <>
            <div className="bio-block">
                <ul className="list-group">
                    <li className="list-group-item">{currentProfile.phone}</li>
                    <li className="list-group-item">{currentProfile.email}</li>
                    <li className="list-group-item">{currentProfile.address}</li>
                </ul>
            </div>
        </>
    );
}
export default ProfileBio;