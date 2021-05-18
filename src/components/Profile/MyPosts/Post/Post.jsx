import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cutt.ly/wjpgPWK" alt="Avatar Post"/>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <div className={s.like}>
                {props.likesCount}
                <img src="https://www.flaticon.com/svg/static/icons/svg/889/889140.svg" alt="like"/>
            </div>
        </div>
    )
}

export default Post;