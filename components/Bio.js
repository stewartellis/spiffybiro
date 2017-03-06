import React from 'react'
import { config } from 'config'
// import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: 5,
        }}
      >
        {/*<img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />*/}
        Things that interest <strong>{config.authorName}</strong> who lives and works in Toronto. 
      </p>
    )
  }
}

export default Bio
