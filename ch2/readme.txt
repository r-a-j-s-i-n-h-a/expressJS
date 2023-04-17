
 "scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve": "node prd/index.js"
  },

for creating generator app
  npx express-generator --view=ejs ch3