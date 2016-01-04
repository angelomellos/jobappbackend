module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Application = mongoose.models.Application,
      api = {};

  // ALL
  api.applications = function (req, res) {
    Application.find(function(err, applications) {
      if (err) {
        res.json(500, err);
      } else {
        res.json({applications: applications});
      }
    });
  };

  // GET
  api.application = function (req, res) {
    var id = req.params.id;
    Post.findOne({ '_id': id }, function(err, post) {
      if (err) {
        res.json(404, err);
      } else {
        res.json(200, {post: post});
      }
    });
  };

  // POST
  api.recordApplication = function (req, res) {
    var application = new Application(req.body);
    application.save(function (err) {
      if (err) return res.json(500, err);
      else return res.json(201, application.toObject());
    });

  };

  // PUT
  api.editPost = function (req, res) {
    var id = req.params.id;

    Post.findById(id, function (err, post) {



      if(typeof req.body.post["title"] != 'undefined'){
        post["title"] = req.body.post["title"];
      }

      if(typeof req.body.post["excerpt"] != 'undefined'){
        post["excerpt"] = req.body.post["excerpt"];
      }

      if(typeof req.body.post["content"] != 'undefined'){
        post["content"] = req.body.post["content"];
      }

      if(typeof req.body.post["active"] != 'undefined'){
        post["active"] = req.body.post["active"];
      }

      if(typeof req.body.post["created"] != 'undefined'){
        post["created"] = req.body.post["created"];
      }


      return post.save(function (err) {
        if (!err) {
          console.log("updated post");
          return res.json(200, post.toObject());
        } else {
         return res.json(500, err);
        }
        return res.json(post);
      });
    });

  };

  // DELETE
  api.deletePost = function (req, res) {
    var id = req.params.id;
    Post.findById(id, function (err, post) {
      return post.remove(function (err) {
        if (!err) {
          console.log("removed post");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/posts', api.applications);
  app.get('/api/apps/:id', api.application);
  app.post('/api/apply', api.recordApplication);
  app.put('/api/post/:id', api.editPost);
  //app.delete('/api/post/:id', api.deletePost);
};
