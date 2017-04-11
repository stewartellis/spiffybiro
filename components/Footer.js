import React from 'react'

class Footer extends React.Component {
  
render () {
    const copyrightYear = new Date().getFullYear()
    return (
      <div className='footer'>
        © {copyrightYear} Stewart Ellis
      </div>
    )
  }
}

export default Footer
