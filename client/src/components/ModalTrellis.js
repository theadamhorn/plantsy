import React, { useState, useEffect } from 'react';
import API from '../utils/API';

export default function TrellisModal(props) {
    console.log(props);

    var comments = props.comments;

    const [newComment, setNewComment] = useState([]);
    const [CommentInfo, setCommentInfo] = useState();

    // useEffect(() => {
    //     // if (!comments) {
    //     //     return;
    //     // }
    //     // else {

    //     API.createTrellisComment()
    //         .then(res => {
    //             console.log(res)
    //             setNewComment(res.data)
    //         })

    // }, []);

    // const updateComments = () => {
    //     API.getTrellisPosts()
    //         .then((res) => {
    //             setCommentInfo(res.data);
    //         })
    //         .catch((err) => console.log(err));

    // }

    const createComment = async (e) => {
        e.preventDefault();
        console.log(CommentInfo)

        if (CommentInfo) {
            await API.createTrellisComment(props.id, {
                comment: CommentInfo,

            })
            props.updatePosts()
            setCommentInfo("")
        }
    }

    return (
        <div className="modal" id={"trellisModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content trellis-post">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-auto text-start">
                                <p className="fs-6">Post by: <i>{props.name}</i></p>
                                <p className="fs-5">{props.body} </p>
                            </div>
                        </div>
                        <br />
                        <div className="row mt-4">
                            <form className="form comment-form">
                                <div className="form-group justify-content-around">
                                    <label htmlFor="comment-field" className="fs-5">Leave a comment:</label><br />
                                    <textarea className="body-input m-1 rounded fs-5" value={CommentInfo} rows="1" id="comment-field" onChange={(e) => setCommentInfo(e.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-secondary m-1" type="submit" onClick={(e) => { createComment(e) }}>Comment</button>
                                </div>
                            </form>
                        </div>
                        <br />
                        <div className="row">
                            {comments.map(comment => {
                                return (
                                    <div key={comment.id + comment.User.name}>
                                        <br />
                                        <div className="row comment-row">
                                            <div className="col-1 py-2" />
                                            <div className="col-2 py-2 comment-border">{comment.User.name} :</div>
                                            <div className="col-8 py-2 comment-border">{comment.comment}</div>
                                            <div className="col-1 py-2" />

                                        </div>

                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}