import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
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
        <Helmet title={`${post.title} | ${config.blogTitle}`} />
        {hero}
        <div className={`${post.articleTop}`}>
          <h1>{post.title}</h1>
          <div className="posted-date">
            STEWART ELLIS -  {moment(post.date).format('MM/DD/YYYY')}
          </div>
        </div>
        <div className={`${post.articleBody}`} dangerouslySetInnerHTML={{ __html: post.body }}  />
        
        <ReadNext post={post} pages={route.pages} />
        
        {/*<Bio />*/}

      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
