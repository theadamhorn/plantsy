import React from 'react'

export default function TrellisModal(props) {

    var comments = props.comments;

    return (
        <div className="modal" id={"trellisModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content trellis_post">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">
                            {props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-auto text-start">
                                {props.name}<br />
                                {props.body}
                            </div>
                        </div>
                        <br />
                        <div class="row mt-4">
                            <form class="form comment-form">
                                <div class="form-group justify-content-around">
                                    <label for="comment-field">Leave a comment:</label><br />
                                    <textarea class="body-input m-1 rounded" rows="2" id="comment-field"></textarea>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary m-1" type="submit">Comment</button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {props.comments.map(comment => {
                                return (
                                    <div className="col-auto comment-column text-start">
                                        {comment.User.username}: {comment.comment}
                                        <hr />
                                    </div>

                                )
                            })}

                            {/* <div className="col-md-6 text-start">
                                    <h5>Care:</h5>{props.care}
                                </div>
                            </div> */}

                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                {document.location.pathname === "/plants" ? "" : <button className="btn add-plant-button" type="button" value={props.id}>Add Plant</button>}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

