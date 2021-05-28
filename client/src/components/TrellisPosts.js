import React, { useEffect, useState } from 'react';
import TrellisModal from "./ModalTrellis";

export default function TrellisPosts(props) {
    var [trellisPosts, setTrellisPosts] = useState(false);
    var [trellisComments, setTrellisComments] = useState(false);

    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/trellis') {
            setTrellisPosts(true)
        }

    }, [props])

    var posts = props.trellisPosts;
    var comments = props.trellisComments;

    if (Trellis === true) {
        return (
            <div>
                <div className="trellis-posts">
                    {posts.map(post => {
                        return (
                            <div className="trellis-item" key={post.id}>
                                <h2 className="trellis-header" id={"heading" + post.id}>
                                    <button className="trellis-button collapsed" type="button" data-bs-toggle="modal" data-bs-target={"#trellisModal" + post.id}>
                                        {post.title}
                                        <TrellisModal
                                            id={post.id}
                                            name={post.name}
                                            title={post.title}
                                            body={post.body}
                                            comments={comments}
                                        />
                                    </button>
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }

    else return (<h1 className="mx-3">No information to display</h1>)
}