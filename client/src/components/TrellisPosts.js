import React, { useState, useEffect } from 'react';
import TrellisModal from "./ModalTrellis";
import CreatePost from "./CreatePost";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import API from '../utils/API';

export default function TrellisPosts() {
    console.log()

    const [showCreate, setShowCreate] = useState(false);
    const [posts, setPosts] = useState([]);
    const [PostInfo, setPostInfo] = useState();

    console.log(posts);

    useEffect(() => {
        if (!posts) {
            return;
        }
        else {
            API.getTrellisPosts()
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch(err => console.log(err));
        }
    }, []);

    // useEffect for the showCreate state for the create post modal
    useEffect(() => {

    }, [showCreate])

    // useEffect for adding a new post to the post list without refreshing page
    const updatePosts = () => {
        API.getTrellisPosts()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));

    }

    const creatingPost = async (e) => {
        e.preventDefault();

        if (PostInfo.title && PostInfo.body) {
            const newPost = await API.createTrellisPost({
                title: PostInfo.title,
                body: PostInfo.body
            })
            updatePosts()
        }
    }
    const styles = useSpring({
        delay: 200,
        to: async (next, cancel) => {
          await next({ opacity: 1 })
          
        },
        from: { opacity: 0 },
      })

    return (
        <div>
            <animated.div className="trellis-posts" style={styles}>
                <div className="text-center">
                    <button onClick={() => setShowCreate(!showCreate)} className="create-post-btn m-1 rounded" type="button" data-bs-toggle="modal" data-bs-target="#createPost"><FontAwesomeIcon icon={faPlusSquare} className="fa-md" /> Create Post</button>
                    <CreatePost
                        PostInfo={PostInfo}
                        setPostInfo={setPostInfo}
                        setShowCreate={setShowCreate}
                        creatingPost={creatingPost}
                    />
                </div>
                <div className="trellis-posts-holder" id="trellis-posts-holder">
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={useEffect}
                        inverse={false} //
                        hasMore={false}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="trellis-posts-holder"
                          endMessage={
                            <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                {posts && posts.map(post => {
                    return (
                 
                        <div key={post.id + post.user_id + 53023}>
                            <button className="trellis-button rounded" type="button" data-bs-toggle="modal" data-bs-target={"#trellisModal" + post.id}>
                                <ul className="nav justify-content-start">
                                    <li className="nav-item fs-5">{post.title}</li>
                                </ul>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item read fs-5">Read <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-lg open-post" /></li>
                                </ul>
                            </button>
                            <TrellisModal
                                id={post.id}
                                userId={post.user_id}
                                name={post.User.name}
                                title={post.title}
                                body={post.body}
                                createdAt={post.createdAt}
                                comments={post.Trellis_Comments}
                                updatePosts={updatePosts}

                            />

                        </div>
                        // </div>
                    )
                })}
                </InfiniteScroll>
                </div>
            </animated.div>
        </div>)
}

