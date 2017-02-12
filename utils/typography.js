import Typography from 'typography'
//import Wordpress2016 from 'typography-theme-wordpress-2016'

//const typography = new Typography(Wordpress2016)

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['droid serif', 'sans-serif'],
  bodyFontFamily: ['droid sans', 'serif'],
  // See below for the full list of options.
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
