> This repo is accompanies the blog post [An example of testing React using Enzyme](https://medium.com/???)

`npm install` to get started, then `npm run test`.

If you'd like to see the app in a browser, `npm run start` will fire up a live reloading webpack-dev-server on port `http://localhost:3333`.


###### Notes

- I had to use Sinon `2.0.0-pre` so that the tests could [successfully be run with Webpack](https://github.com/sinonjs/sinon/issues/830#issuecomment-182264301).
