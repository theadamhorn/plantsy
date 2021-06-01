import React, { useState, useEffect } from 'react';
import API from '../utils/API';


export default function CreatePost(props) {

    return (
        <div className="modal" id="createPost" data-bs-backdrop="false"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content create-post">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">Create post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <div className="row">
                            <div className="col-auto text-start">
                                {props.name}<br />
                                <p className="fs-6">{props.body} </p>
                            </div>
                        </div>
                        <br /> */}
                        <div className="row mt-4">
                            <form className="form comment-form" >
                                <div className="form-group justify-content-around">
                                    <label for="post-title" className="fs-6">Title:</label><br />
                                    <input className="title-input m-1 rounded" rows="3" id="post-title" onChange={(e) => props.setPostInfo({ ...props.PostInfo, title: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label for="post-body">Body:</label><br />
                                    <textarea className="body-input m-1 rounded" rows="7" id="post-body" onChange={(e) => props.setPostInfo({ ...props.PostInfo, body: e.target.value })}></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-secondary m-1" type="submit" data-bs-dismiss="modal" onClick={(e) => {
                                        props.creatingPost(e)
                                        props.setShowCreate(false)
                                    }}>Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

