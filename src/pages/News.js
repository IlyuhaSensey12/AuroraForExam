import React, {useContext, useEffect} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import { useState } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import {AppContext, AppProvider} from "./AppContext";

function Post(props) {
    return (
        <div className="post-container" style={{ border: '1px solid #006BA8', margin: '10px', padding: '10px' , width:'30%'}}>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-content">{props.content}</p>
            <div className="post-details">
                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>Time and place: <p style={{color:'#000'}}>{props.timeAndPlace}</p></h3>

                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>Rating: <p style={{color:'#000'}}>{props.rating}</p></h3>

                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>People: <p style={{color:'#000'}}>{props.countPeople}</p></h3>
            </div>
        </div>
    );
}

function PostList() {
    const { posts } = useContext(AppContext);

    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.description}
                    countPeople={post.count}
                    timeAndPlace={post.timeAndPlace}
                    rating={post.ratingOfVolunteer}
                    postID={post.id}
                />
            ))}
        </div>
    );
}


//
// export default function News() {
//
//     const [posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         axios.get('http://localhost:8081/api/v1/showAllPosts')
//             .then(response => {
//                 console.log('Posts data:', response.data);
//                 setPosts(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching posts data:', error);
//             });
//     }, []);
//
//     return (
//         <div>
//             <Navbar/>
//             <Navbar_menu/>
//             <div class="container">
//                 <h1 style={{textAlign: "center", marginTop:'40px',fontSize:'80px',color: '#006BA8', fontFamily:"Playfair Display"}}><strong>Inspiration in Action</strong></h1>
//                 <div class="input-group mb-3 mt-5">
//                     <div class="input-group-prepend">
//                     </div>
//                 </div>
//             </div>
//
//             <div className="container mt-5 mb-5"><PostList posts={posts}/></div>
//
//             <div class="container mt-5 mb-5">
//                 <div class="row">
//                     <div class="col-md-12 text-center">
//                         <a href="" class="btn btn-light" style={{fontSize: '30px', color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>See all</a>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//
//
//
//     )
// }
//

function News() {
    return (
        <AppProvider>
            <div>
                <Navbar />
                <Navbar_menu />
                <div className="container">
                    <h1 style={{ textAlign: "center", marginTop: '40px', fontSize: '80px', color: '#006BA8', fontFamily: "Playfair Display" }}>
                        <strong>Inspiration in Action</strong>
                    </h1>
                    <div className="input-group mb-3 mt-5">
                        <div className="input-group-prepend">
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <PostList />
                </div>

                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="" className="btn btn-light" style={{ fontSize: '30px', color: '#006BA8', background: '#FFF', borderColor: '#006BA8' }}>
                                See all
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </AppProvider>
    );
}

export default News;
