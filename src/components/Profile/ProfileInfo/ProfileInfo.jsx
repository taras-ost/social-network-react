import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={s.photo}>*/}
            {/*    <img src="https://cutt.ly/yji2U9W"/>*/}
            {/*</div>*/}
            <div className={s.logo}>
                <img src={props.profile.photos.large}/>
                <h1>{props.profile.fullName}</h1>
                {/*<p>{props.profile.lookingForAJobDescription}</p>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <h2>Contacts</h2>
                <ul>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.youtube}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;