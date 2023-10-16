import { BiEdit } from 'react-icons/bi';
import './Feed.css'
import InputOption from './InputOption';
import { MdImage } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdEventNote } from 'react-icons/md';
import { MdCalendarViewDay } from 'react-icons/md';
import Post from './Post';
import { useEffect, useState } from 'react';
import { db } from './firebase';

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("post")
    }, []);


    const sendPost = (event) => {
        event.preventDefault();
    }

    return (
        <div className='feed'>
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <BiEdit />
                    <form>
                        <input type="text" />
                        <button 
                        onClick={sendPost} type='submit'>
                            Send
                        </button>
                    </form>
                </div>

                <div className="feed__inputoption">
                    <InputOption Icon={<MdImage style={{ color: "#70B5f9" }} />}
                        title="Photo"
                    />
                    <InputOption Icon={<MdSubscriptions style={{ color: "#E7A33E" }} />}
                        title="Video"
                    />
                    <InputOption Icon={<MdEventNote style={{ color: "#C0CBCD" }} />}
                        title="Event"
                    />
                    <InputOption Icon={<MdCalendarViewDay style={{ color: "#7FC15E" }} />}
                        title="Writte article"
                    />
                </div>
            </div>
            {/* Post */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post
                name='Dapplex G'
                description="This is a test"
                message="Wow it worked"
            />
        </div>
    )
}

export default Feed;