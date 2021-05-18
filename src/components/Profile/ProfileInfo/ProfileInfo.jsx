import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.photo}>
                <img src="https://cutt.ly/yji2U9W"/>
            </div>
            <div className={s.logo}>
                <img src="https://cutt.ly/8ji2yCM" alt="Avatar Photo"/>
                <h1>You name</h1>
                <p>Desription</p>
            </div>
        </div>
    )
}

export default ProfileInfo;