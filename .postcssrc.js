// node.js 방식 -> common.js
module.exports={
  Plugin : [
    require('autoprefixer')
  ]
}

// ES 방식
/* import autoprefixer from 'autoprefixer';
export {
  plugins : [
    autoprefixer
  ]
} */