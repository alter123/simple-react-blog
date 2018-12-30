import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './Redux';
import { Link } from 'react-router-dom';

class Posts extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={ post.id }>
                <Link to={`/posts/${post.id}`}>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
                </Link>
            </div>
        ))
        if( !postItems ) return <div>Loading... </div>
        return (
            <div>
                <h1> Posts </h1>
                { postItems }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect( mapStateToProps, {fetchPosts} )(Posts);