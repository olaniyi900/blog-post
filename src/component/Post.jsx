import React, { Component } from 'react';

class Post extends Component {
    state = { 
        posts: []
     }

     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then(res => res.json())
         .then(data => this.setState({ posts: data.slice(0,20) }))
     }

    render() { 
        return ( <div className="container mt-4">
             {this.state.posts.map( 
                 (post) => <div className="card mt-4 ml-4 mr-5" key={post.id}>
                                <div className="card-header">
                                    <h3>{post.title}</h3>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                    <p>{post.body}</p>
                                    </blockquote>
                                </div>
                            </div>

              )}
                    
                </div> );
    }
}
 
export default Post;