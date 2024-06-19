import React from 'react'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import { useState } from 'react'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: 1,
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the first post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae tempore quibusdam placeat omnis odit repellat. Repudiandae, temporibus dolorem',
        authorID: 3
    },
    {
        id: 2,
        thumbnail: Thumbnail2,
        category: 'weather',
        title: 'This is the title of the second post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae tempore quibusdam placeat omnis odit repellat. Repudiandae, temporibus dolorem',
        authorID: 1
    },
    {
        id: 3,
        thumbnail: Thumbnail3,
        category: 'business',
        title: 'This is the title of the third post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae tempore quibusdam placeat omnis odit repellat. Repudiandae, temporibus dolorem',
        authorID: 2
    },
    {
        id: 4,
        thumbnail: Thumbnail4,
        category: 'art',
        title: 'This is the title of the fourth post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias corporis, molestiae saepe fugiat cum earum magni? Nulla, dolorum iusto.',
        authorID: 4
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
      <section className="posts">
          <div className="container posts_container">
                {posts.map(({ id, thumbnail, category, title, desc, authorID }) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />)}
          </div>
    </section>
  )
}

export default Posts
