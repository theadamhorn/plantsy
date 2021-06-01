import React, { useState, useEffect } from 'react';
import API from '../utils/API';

export default function TrellisModal(props) {
    console.log(props);
    var comments = props.comments;

    const [trellisComments, setTrellisComments] = useState([]);

    useEffect(() => {
        // if (!comments) {
        //     return;
        // }
        // else {

        API.createTrellisComment()
            .then(res => {
                console.log(res)
                setTrellisComments(res.data)
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div className="modal" id={"trellisModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content trellis-post">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">
                            {props.title}</h5>
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
                                    <textarea className="body-input m-1 rounded fs-5" rows="1" id="comment-field"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-secondary m-1" type="submit">Comment</button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {comments.map(comment => {
                                return (
                                    <div className="col-auto comment-column text-start">
                                        {comment.User.username}: {comment.comment}
                                        <hr />
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

