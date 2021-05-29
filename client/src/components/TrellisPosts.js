import React from 'react';
import TrellisModal from "./ModalTrellis";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default function TrellisPosts(props) {
    console.log(props)

    var posts = props.posts;
    // var comments = props.comments;

    return (
        <div>
            <div className="trellis-posts">
                <div className="text-center">
                    <button className="create-post-btn m-1 rounded" type="button" data-bs-toggle="modal" data-bs-target={"#createPost"}><FontAwesomeIcon icon={faPlusSquare} className="fa-md" /> Create Post</button>
                </div>
                {posts && posts.map(post => {
                    return (
                        // <div className="trellis-item" key={post.id}>
                        // <h2 className="trellis-header" id={"heading" + post.id}>
                        <button className="trellis-button rounded" type="button" data-bs-toggle="modal" data-bs-target={"#trellisModal" + post.id}>
                            <ul className="nav justify-content-start">
                                <li className="nav-item fs-5">{post.title}</li>
                            </ul>
                            <ul className="nav justify-content-end">
                                <li className="nav-item read fs-5">Read <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-lg open-post" /></li>
                            </ul>
                            <TrellisModal
                                id={post.id}
                                name={post.name}
                                title={post.title}
                                body={post.body}
                                comments={post.Trellis_Comments}
                            />
                        </button>
                        // </h2>
                        // </div>
                    )
                })}
            </div>
        </div>)
}

