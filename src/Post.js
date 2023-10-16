import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import './Post.css';
import { FiThumbsUp } from 'react-icons/fi';
import { BsChatLeftText } from 'react-icons/bs';
import { MdShare } from 'react-icons/md'; 
import { MdSend } from 'react-icons/md';
import InputOption from './InputOption';

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className='post'>
            <div className="post__header">
                <RxAvatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption
                    Icon={<FiThumbsUp />}
                    title='Like'
                />
                <InputOption
                    Icon={<BsChatLeftText />}
                    title='Comment'
                />
                { <InputOption
                    Icon={<MdShare />}
                    title='Share'
                /> }
                <InputOption
                    Icon={<MdSend />}
                    title='Send'
                />
            </div>
        </div>
    )
}

export default Post;