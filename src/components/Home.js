import React, { Component } from 'react'
import RainBow from '../components/RainBow';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';


 class Home extends Component {

    render() {
        const {posts} = this.props;
        // console.log(this.props);
        if (posts && posts.length > 0)
        {
            return (
                posts.map(post => {
                    return (
                        <Link to={"/" + post.id} key={post.id}>
                            <div className="container" key={post.id}>
                                <h4 className="container">{post.id} - {post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    )
                })
            )
        }
        else
        {
            return (
                <div className="container" >
                    Data Empty
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts       
    }
}
export default connect(mapStateToProps)(Home)