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
import firebase from 'firebase';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))
                )
            })
    }, []);


    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Dapplex G',
            description: 'this is a message',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('')
    }

    return (
        <div className='feed'>
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <BiEdit />
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text" />
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
            {posts.map(({ id, name, description, message, photoUrl }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed;