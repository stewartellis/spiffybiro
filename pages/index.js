import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import moment from 'moment'
import Footer from 'components/Footer'

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date').reverse();
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
      <div className="home-wrap">
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <Bio />
        <div className='article-list'>        
          {visiblePages.map((page) => (
            <Link to={prefixLink(page.path)} className="article-card" key={page.path}>
              <div>
                <img src= {page.path + get(page, 'data.cardImage')} />                  
                <div className="article-title">{get(page, 'data.title')}</div>
                <div className="article-date">{moment(get(page, 'data.date')).format('MM/DD/YYYY')}</div>     
              </div>
            </Link>
          ))}        
        </div> 
        <Footer />       
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
