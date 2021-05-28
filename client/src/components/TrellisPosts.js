import React from 'react';
import TrellisModal from "./ModalTrellis";

export default function TrellisPosts(props) {
    console.log(props)

    var posts = props.posts;
    // var comments = props.comments;

    return (
        <div>
            <div className="trellis-posts">
                {posts && posts.map(post => {
                    return (
                        <div className="trellis-item" key={post.id}>
                            <h2 className="trellis-header" id={"heading" + post.id}>
                                <button className="trellis-button" type="button" data-bs-toggle="modal" data-bs-target={"#trellisModal" + post.id}>
                                    {post.title}
                                    <TrellisModal
                                        id={post.id}
                                        name={post.name}
                                        title={post.title}
                                        body={post.body}
                                        comments={post.Trellis_Comments}
                                    />
                                </button>
                            </h2>
                        </div>
                    )
                })}
            </div>
        </div>)
}

