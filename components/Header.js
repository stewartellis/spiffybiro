import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header-inner">
          <Link className="logo" to={prefixLink('/')} >
            {config.blogTitle}
          </Link>
        </div>         
      </div>
    )
  }
}

export default Header