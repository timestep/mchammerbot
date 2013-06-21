// Generated by CoffeeScript 1.4.0
(function() {
  var Bot, app, bindings, bluetooth, bot, express, moch, motionControlSettings, opts;

  Bot = require('./bot');

  express = require('express');

  bluetooth = true;

  moch = process.argv.indexOf("--dry-run") !== -1;

  if (bluetooth) {
    opts = {
      port: "/dev/tty.FireFly-FC8C-RNI-SPP",
      baud: 115200
    };
  } else {
    opts = {
      port: "/dev/tty.usbserial-A9007MTf",
      baud: 9600
    };
  }

  opts.moch = moch;

  bot = new Bot(opts);

  bot.connect();

  bindings = {
    forward: {
      a: +1,
      s: +1,
      d: +1,
      f: +1
    },
    turn: {
      a: +1,
      s: -1,
      d: +1,
      f: -1,
    },
    strafe: {
      a: +1,
      s: -1,
      d: -1,
      f: +1
    }
  };

  motionControlSettings = {
    forward: 0,
    turn: 0,
    strafe: 0
  };

  app = express();

  app.use(express.bodyParser());

  app.enable("jsonp callback");

  app.get('/motors', function(req, res) {
    return res.jsonp(bot.motorOutputs);
  });

  app.get('/motion-control', function(req, res) {
    return res.jsonp(motionControlSettings);
  });

  app.get('/motion-control/update', function(req, res) {
    var axis, b, data, dir, k, motor, motorOutputs, v;
    motorOutputs = {};
    data = req.query;
    console.log(data);
    motorOutputs = {};
    for (axis in bindings) {
      b = bindings[axis];
      for (k in b) {
        dir = b[k];
        motionControlSettings[axis] = data[axis] || 0;
        motorOutputs[k] = (motorOutputs[k] || 0) + (data[axis] || 0) * dir;
      }
    }
    for (motor in motorOutputs) {
      v = motorOutputs[motor];
      motorOutputs[motor] = Math.min(+1, Math.max(-1, v)) * 10;
    }
    for (motor in motorOutputs) {
      v = motorOutputs[motor];
      bot.set_motor(motor, {
        to: v
      });
    }
    return res.jsonp("ACK");
  });

  app.listen(8071);

  console.log('Listening on port 8071');

}).call(this);
