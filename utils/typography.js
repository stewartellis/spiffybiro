import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.85,
  headerFontFamily: ['open sans', 'sans-serif'],
  bodyFontFamily: ['pt serif', 'serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
