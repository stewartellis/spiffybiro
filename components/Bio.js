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
          <div className="bio-pic">
            {<img src={prefixLink(profilePic)}  alt={`author ${config.authorName}`} />}
          </div>
          <div className="bio-copy">
            <strong>Stewart Ellis</strong><br/>
            I live in Toronto, work on the web, play bass and write a bit about things that interest me.
          </div>
     
          
        </div>
        </div>
    )
  }
}

export default Bio
