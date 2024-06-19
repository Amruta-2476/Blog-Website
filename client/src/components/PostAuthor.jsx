import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
      <Link to={'/posts/users/fghj'} className='post_author'>
          <div className="post_author_avatar">
              <img src={Avatar} alt="" />
          </div>
          <div className="post_author_details">
                <h5 style={{ fontSize: '14px' }}>By: John Doe</h5>
                <small>Just now</small>
          </div>
    </Link>
  )
}

export default PostAuthor
