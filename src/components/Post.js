import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './Redux';

class Post extends Component{
    componentWillMount(){
        this.props.fetchPost(this.props.id)
    }

    render() {
        if( !this.props.post ){
            return <div>Loading..</div>
        }

        const { title, body } = this.props.post
        return (
            <div>
                <h1> Expanded Stuff </h1>
                { title }<hr/>
                { body }
            </div>
        )
    }
}

const mapStateToProps = (state, routerProps) => ({
    post: state.posts.item,
    id: routerProps.match.url
});

export default connect( mapStateToProps, {fetchPost} )(Post);