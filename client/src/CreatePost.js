import React from "react";

const CreatePost = () => {
    return (
        <div>
            <form >
                <div className="form-group">
                  <label for="exampleInputEmail1"> Title </label>
                  <input className="form-control"/>
                </div>
                <button className="btn btn-primary"> Submit </button>
            </form>
        </div>
    );
};

export default CreatePost;