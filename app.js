var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var swaggerTools = require("swagger-tools");
var swaggerDoc = require('./swagger.json');

var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// swaggerRouter configuration
var swaggerRouterOptions = {
    controllers: './controllers',
    useStubs: false // Conditionally turn on stubs (mock mode)
};

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(swaggerRouterOptions));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .send({
            "error": {
                message: err.message,
                error: err
            }
        }
    );
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.stack);
    res.send({
        "status": "error",
        "message": err.message
    });
});

app.listen(process.env.PORT || 9005, function () {
    console.log("users listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
