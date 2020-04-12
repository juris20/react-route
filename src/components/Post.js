import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deletePost} from '../actions//postAction';
 class Post extends Component {

    handleClick  = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);

        const post = this.props.post;
        if(post)
        {
            return (
                <div className="container">
                    <h4 className="container"> {post.title}</h4>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={this.handleClick}>
                            Delete Post
                        </button>
                    </div>
                </div>
            )
        }
        else
            return  (
                <div>
                    <img src="./loading_blue.gif" alt=""/>
                </div>
            )   
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
       deletePost: (id) => { dispatch(deletePost(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)