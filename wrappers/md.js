import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

// import '../css/zenburn.css'
import '../scss/app.scss'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    let hero = "";
    if (post.heroImage !== "") {
      hero = (
        <div 
          className="hero-block"
          style={{ backgroundImage:`url(${post.heroImage})` }}>
        </div>
      )
    }

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        {hero}
        <h1 style={{marginTop: 40}}>{post.title}</h1>
        <h4 style={{fontSize:'14px'}} className="happy">
          POSTED {moment(post.date).format('D|MM|YYYY')}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
