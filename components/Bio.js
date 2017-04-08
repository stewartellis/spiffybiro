import React from 'react'
import { config } from 'config'
// import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <div className='bio-wrap'>
        <div className='bio-inner'>
          {<img
            src={prefixLink(profilePic)}
            alt={`author ${config.authorName}`}          
        />}
        Things that interest me
     
          
        </div>
        </div>
    )
  }
}

export default Bio
