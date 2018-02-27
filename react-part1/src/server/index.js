import express from 'express';
import handleRender from './handleRender';
import { apiRoutes } from './routes/apiRoutes';

const Post = require('./schema/schema').Post;

const port = 8000;
const server = express();

server.use(express.static('public'));

server.get('/api/posts', function (req, res) {
  Post.find({}).
      populate('author').
      exec(function (err, posts) {
          res.send(posts);
      });
});

server.get('/*', handleRender);

server.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
