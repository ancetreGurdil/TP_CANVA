// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/drawings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawing01 = drawing01;
exports.drawing02 = drawing02;
exports.drawing03 = drawing03;
exports.drawing04 = drawing04;
exports.drawing05 = drawing05;
exports.drawing06 = drawing06;
exports.drawing07 = drawing07;
exports.drawing08 = drawing08;
exports.drawing09 = drawing09;
exports.drawing10 = drawing10;
exports.drawing11 = drawing11;
exports.drawing12 = drawing12;
exports.drawing13 = drawing13;
exports.drawing14 = drawing14;
exports.drawing15 = drawing15;

function drawing01(canvas, context) {
  var side = 50;
  var margin = 10;
  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(margin, margin, side, side);
  context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(margin * 7, margin, side, side);
  context.fillStyle = "rgb(0, 0, 255)";
  context.fillRect(margin * 13, margin, side, side);
}

function drawing02(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var margin = 10; //context.fillStyle = "rgb(255,0,0)";
  //context.fillRect (margin,margin,(760/3),580)
  //context.fillStyle = "rgb(0,255,0)";
  //context.fillRect (margin*2+(760/3),margin,(760/3),580)
  //context.fillStyle = "rgb(0,0,255)";
  //context.fillRect (margin*3+(760/3)*2,margin,(760/3),580)

  context.fillStyle = "rgb(255,0,0)";
  context.fillRect(margin, margin, (width - margin * 4) / 3, height - margin * 2);
  context.fillStyle = "rgb(0,255,0)";
  context.fillRect(margin * 2 + (width - margin * 4) / 3, margin, (width - margin * 4) / 3, height - margin * 2);
  context.fillStyle = "rgb(0,0,255)";
  context.fillRect(margin * 3 + (width - margin * 4) / 3 * 2, margin, (width - margin * 4) / 3, height - margin * 2);
}

function drawing03(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var margin = 10;
  context.fillStyle = "rgb(255,0,0)";
  context.fillRect(margin, margin, width - margin * 2, (height - 4 * margin) / 3);
  context.fillStyle = "rgb(0,255,0)";
  context.fillRect(margin, margin * 2 + (height - 4 * margin) / 3, width - margin * 2, (height - 4 * margin) / 3);
  context.fillStyle = "rgb(0,0,255)";
  context.fillRect(margin, margin * 3 + (height - 4 * margin) / 3 * 2, width - margin * 2, (height - 4 * margin) / 3); //context.fillStyle = "rgb(255,0,0)";
  //context.fillRect (margin,margin,780,(560/3))
  //context.fillStyle = "rgb(0,255,0)";
  //context.fillRect (margin,margin*2+(560/3),780,(560/3))
  //context.fillStyle = "rgb(0,0,255)";
  //context.fillRect (margin,margin*3+(560/3)*2,780,(560/3))
}

function drawing04(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var side = 150;
  var triangleHeight = side * Math.sqrt(3) / 2;
  var center = [width / 2, height / 2];
  var a = [center[0] - side / 2, center[1] + triangleHeight / 3];
  var b = [center[0] + side / 2, center[1] + triangleHeight / 3];
  var c = [center[0], center[1] - triangleHeight * 2 / 3];
  var radius = 100;
  context.beginPath();
  context.fillStyle = "rgba(255,0,0,0.5)";
  context.arc(a[0], a[1], radius, 0, 2 * Math.PI, true);
  context.fill("evenodd");
  context.beginPath();
  context.fillStyle = "rgba(0,255,0,0.5)";
  context.arc(b[0], b[1], radius, 0, 2 * Math.PI, true);
  context.fill("evenodd");
  context.beginPath();
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.arc(c[0], c[1], radius, 0, 2 * Math.PI, true);
  context.fill("evenodd");
}

function drawing05(canvas, context) {
  var side = 300;
  var width = canvas.width;
  var height = canvas.height;
  var center = [width / 2, height / 2];
  var triangleHeight = side * Math.sqrt(3) / 2;
  var a = [center[0] - side / 2, center[1] + triangleHeight / 3];
  var b = [center[0] + side / 2, center[1] + triangleHeight / 3];
  var c = [center[0], center[1] - triangleHeight * 2 / 3];
  context.beginPath();
  context.fillStyle = "#d4ce46";
  context.moveTo(a[0], a[1]);
  context.lineTo(c[0], c[1]);
  context.lineTo(b[0], b[1]);
  context.lineTo(a[0], a[1]);
  context.lineTo((c[0] - a[0]) / 2 + a[0], a[1] - c[1]);
  context.lineTo((b[0] - c[0]) / 2 + c[0], b[1] - c[1]);
  context.lineTo(a[0] + side / 2, center[1] + triangleHeight / 3);
  context.lineTo((c[0] - a[0]) / 2 + a[0], a[1] - c[1]);
  context.fill("evenodd");
}

function drawing06(canvas, context) {
  var rectWidth = 40;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";

  for (var i = 0; i * rectWidth < canvas.width; i++) {
    if (i % 2 == 0) {
      context.fillStyle = lightColor;
      context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
    } else if (i % 2 == 1) {
      context.fillStyle = darkColor;
      context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
    }
  }
}

function drawing07(canvas, context) {
  var rectWidth = 40;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
  var steps = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / (canvas.width / rectWidth);
  }

  for (var i = 0; i * rectWidth <= canvas.width; i++) {
    var couleurRectanglesX = colorStart[0] + steps[0] * i;
    var couleurRectanglesY = colorStart[1] + steps[1] * i;
    var couleurRectanglesZ = colorStart[2] + steps[2] * i;
    context.fillStyle = "rgb(" + couleurRectanglesX + "," + couleurRectanglesY + "," + couleurRectanglesZ + ")"; //console.log(couleurRectanglesX);
    //console.log(couleurRectanglesY);
    //console.log(couleurRectanglesZ);

    context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
  }
}

function drawing08(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
  var nbRectangles = 10;
  var steps = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / nbRectangles;
  }

  for (var i = 0; i < nbRectangles; i++) {
    var couleurRectanglesX = colorStart[0] + steps[0] * i;
    var couleurRectanglesY = colorStart[1] + steps[1] * i;
    var couleurRectanglesZ = colorStart[2] + steps[2] * i;
    context.fillStyle = "rgb(" + couleurRectanglesX + "," + couleurRectanglesY + "," + couleurRectanglesZ + ")";
    context.fillRect(0, canvas.height / nbRectangles * i, canvas.width - canvas.width / nbRectangles * i, canvas.height - canvas.height / nbRectangles * i);
    console.log(0, canvas.height / nbRectangles * i, canvas.width - canvas.width / nbRectangles * i, canvas.height - canvas.height / nbRectangles * i);
  }
}

function drawing09(canvas, context) {
  var center = [canvas.width / 2, canvas.height / 2];
  var radius = 200;
  var nbSteps = 20;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
  var steps = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / nbSteps;
  }

  console.log(steps);

  for (var i = 20; i > 0; i--) {
    var couleurRectanglesX = colorStart[0] + steps[0] * i;
    var couleurRectanglesY = colorStart[1] + steps[1] * i;
    var couleurRectanglesZ = colorStart[2] + steps[2] * i;
    context.fillStyle = "rgb(" + couleurRectanglesX + "," + couleurRectanglesY + "," + couleurRectanglesZ + ")";
    context.beginPath();
    context.arc(center[0], center[1], radius, 2 * Math.PI / 20 * i, 0 * Math.PI, true);
    context.lineTo(center[0], center[1]);
    context.fill();
  }
}

function drawing10(canvas, context) {
  var center = [canvas.width / 2, canvas.height / 2];
  var pokeballRadius = 200;
  var externalRadius = 50;
  var internalRadius = 30;
  var pokeballRedColor = "#ee343c";
  var pokeballStrokeColor = "#171013";
  context.beginPath();
  context.lineWidth = 10;
  context.arc(center[0], center[1], pokeballRadius, Math.PI, 2 * Math.PI);
  context.lineTo(2 * pokeballRadius + externalRadius, center[1]);
  context.arc(center[0], center[1], externalRadius, 0, Math.PI, true);
  context.lineTo(pokeballRadius, center[1]);
  context.fillStyle = pokeballRedColor;
  context.fill();
  context.stroke();
  context.beginPath();
  context.lineWidth = 10;
  context.arc(center[0], center[1], pokeballRadius, 0, Math.PI, false);
  context.moveTo(pokeballRadius, center[1]);
  context.lineTo(center[0] - externalRadius, center[1]);
  context.arc(center[0], center[1], externalRadius, Math.PI, 0, true);
  context.lineTo(3 * pokeballRadius, center[1]);
  context.stroke();
  context.beginPath();
  context.lineWidth = 5;
  context.arc(center[0], center[1], internalRadius, 0, 2 * Math.PI);
  context.stroke();
  context.beginPath();
  context.moveTo(pokeballRadius, center[1]);
  context.lineTo(center[0] - externalRadius, center[1]);
  context.arc(center[0], center[1], externalRadius, Math.PI, 0, false);
  context.moveTo(center[0] - externalRadius, center[1]);
  context.arc(center[0], center[1], externalRadius, Math.PI, 0, true);
  context.lineTo(3 * pokeballRadius, center[1]);
  context.lineWidth = 15;
  context.stroke();
}

function drawing11(canvas, context) {
  var side = 20;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";

  for (var j = 0; j * side < canvas.height; j++) {
    for (var i = 0; i * side < canvas.width; i++) {
      if (i % 2 == 0 && j % 2 == 0) {
        context.fillStyle = lightColor;
        context.fillRect(i * side, j * side, side, side);
      } else if (i % 2 == 1 && j % 2 == 0) {
        context.fillStyle = darkColor;
        context.fillRect(i * side, j * side, side, side);
      } else if (i % 2 == 0 && j % 2 == 1) {
        context.fillStyle = darkColor;
        context.fillRect(i * side, j * side, side, side);
      } else {
        context.fillStyle = lightColor;
        context.fillRect(i * side, j * side, side, side);
      }
    }
  }
}

function drawing12(canvas, context) {
  var side = 40;
  var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  var blueColor = 255;

  for (var j = 0; j * side < canvas.height; j++) {
    for (var i = 0; i * side < canvas.width; i++) {
      context.fillStyle = "rgb(" + redGreenSteps[0] * i + "," + redGreenSteps[1] * j + "," + blueColor + ")";
      context.fillRect(side * i, side * j, side, side);
    }
  }
}

function drawing13(canvas, context) {
  var side = 40;
  var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  var blueColor = 255;
  var arcSteps = [Math.PI / (canvas.width / side), Math.PI / (canvas.height / side)];

  for (var j = 0; j * side < canvas.height; j++) {
    for (var i = 0; i * side < canvas.width; i++) {
      context.fillStyle = "rgb(" + redGreenSteps[0] * i + "," + redGreenSteps[1] * j + "," + blueColor + ")";
      context.beginPath();
      context.arc(side * i + side / 2, side * j + side / 2, canvas.width / 50, arcSteps[1] * j + arcSteps[0] * i, 0, true);
      context.fill(); //context.beginPath();
      //context.arc(50,50,200,0,Math.PI,false)
      //context.fill();
    }
  }
}

function drawing14(canvas, context) {
  var side = 100;
  var radius = 10;
  var carre = 10;
  var pas = 20;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";

  for (var j = 0; j * side <= canvas.height; j++) {
    for (var i = 0; i * side <= canvas.width; i++) {
      if (i % 2 == 0 && j % 2 == 0) {
        context.fillStyle = lightColor;
        context.fillRect(i * side, j * side, side, side);
      } else if (i % 2 == 1 && j % 2 == 0) {
        context.fillStyle = darkColor;
        context.fillRect(i * side, j * side, side, side);
      } else if (i % 2 == 0 && j % 2 == 1) {
        context.fillStyle = darkColor;
        context.fillRect(i * side, j * side, side, side);
      } else {
        context.fillStyle = lightColor;
        context.fillRect(i * side, j * side, side, side);
      }

      for (var k = 0; k <= 5; k++) {
        for (var l = 0; l <= 5; l++) {
          if (i % 2 == 0 && j % 2 == 0) {
            context.fillStyle = darkColor;
            context.beginPath();

            if (k == l) {
              context.fillStyle = lightColor;
              context.arc(carre + k * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            } else {
              context.fillStyle = darkColor;
              context.arc(carre + l * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            }

            context.fill();
          } else if (i % 2 == 1 && j % 2 == 0) {
            context.fillStyle = lightColor;
            context.beginPath();

            if (k == l) {
              context.fillStyle = darkColor;
              context.arc(carre + k * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            } else {
              context.fillStyle = lightColor;
              context.arc(carre + l * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            }

            context.fill();
          } else if (i % 2 == 0 && j % 2 == 1) {
            context.fillStyle = lightColor;
            context.beginPath();

            if (k == l) {
              context.fillStyle = darkColor;
              context.arc(carre + k * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            } else {
              context.fillStyle = lightColor;
              context.arc(carre + l * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            }

            context.fill();
          } else {
            context.fillStyle = darkColor;
            context.beginPath();

            if (k == l) {
              context.fillStyle = lightColor;
              context.arc(carre + k * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            } else {
              context.fillStyle = darkColor;
              context.arc(carre + l * pas + side * i, carre + k * pas + side * j, radius, Math.PI * 2, 0, true);
            }

            context.fill();
          }
        }
      }
    }
  }
}

function drawing15(canvas, context) {}
},{}],"dist/expected.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawing01 = drawing01;
exports.drawing02 = drawing02;
exports.drawing03 = drawing03;
exports.drawing04 = drawing04;
exports.drawing05 = drawing05;
exports.drawing06 = drawing06;
exports.drawing07 = drawing07;
exports.drawing08 = drawing08;
exports.drawing09 = drawing09;
exports.drawing10 = drawing10;
exports.drawing11 = drawing11;
exports.drawing12 = drawing12;
exports.drawing13 = drawing13;
exports.drawing14 = drawing14;
exports.drawing15 = drawing15;
var _0x33fa = ['fill', 'sqrt', '#adc8d2', 'rgb(0,\x20255,\x200)', 'rgb(255,\x200,\x200,\x20.5)', 'moveTo', 'rgb(0,\x200,\x20255)', 'rgb(255,\x20255,\x20255)', 'rgb(0,\x20255,\x200,\x20.5)', 'width', 'lineTo', 'arc', 'rgb(0,\x200,\x20255,\x20.5)', 'beginPath', 'height', '#ee343c', '#171013', 'lineWidth', 'fillRect', 'rgb(', 'stroke', 'fillStyle', '#f4f4f6', '#d4ce46', 'rgb(255,\x200,\x200)'];

(function (_0x2a9670, _0x28615a) {
  var _0x33fa8b = function _0x33fa8b(_0x20cab1) {
    while (--_0x20cab1) {
      _0x2a9670['push'](_0x2a9670['shift']());
    }
  };

  _0x33fa8b(++_0x28615a);
})(_0x33fa, 0xef);

var _0x20ca = function _0x20ca(_0x2a9670, _0x28615a) {
  _0x2a9670 = _0x2a9670 - 0x19d;
  var _0x33fa8b = _0x33fa[_0x2a9670];
  return _0x33fa8b;
};

function drawing01(_0x2d04b0, _0x43120c) {
  var _0x422396 = _0x20ca;
  _0x43120c[_0x422396(0x1a4)] = _0x422396(0x1a7), _0x43120c[_0x422396(0x1a1)](0xa, 0xa, 0x32, 0x32), _0x43120c[_0x422396(0x1a4)] = _0x422396(0x1ab), _0x43120c['fillRect'](0x46, 0xa, 0x32, 0x32), _0x43120c[_0x422396(0x1a4)] = _0x422396(0x1ae), _0x43120c[_0x422396(0x1a1)](0x82, 0xa, 0x32, 0x32);
}

function drawing02(_0x2935c0, _0x15b0e5) {
  var _0x19ad1f = _0x20ca,
      _0x5dd84f = (_0x2935c0['width'] - 0x28) / 0x3,
      _0x20864d = _0x2935c0['height'] - 0x14;

  _0x15b0e5[_0x19ad1f(0x1a4)] = _0x19ad1f(0x1a7), _0x15b0e5[_0x19ad1f(0x1a1)](0xa, 0xa, _0x5dd84f, _0x20864d), _0x15b0e5[_0x19ad1f(0x1a4)] = 'rgb(0,\x20255,\x200)', _0x15b0e5[_0x19ad1f(0x1a1)](_0x5dd84f + 0x14, 0xa, _0x5dd84f, _0x20864d), _0x15b0e5[_0x19ad1f(0x1a4)] = 'rgb(0,\x200,\x20255)', _0x15b0e5['fillRect'](_0x5dd84f * 0x2 + 0x1e, 0xa, _0x5dd84f, _0x20864d);
}

function drawing03(_0x26048c, _0x4bf1cc) {
  var _0x39c223 = _0x20ca,
      _0xa76a0c = _0x26048c[_0x39c223(0x1b1)] - 0x14,
      _0x3da84a = (_0x26048c['height'] - 0x28) / 0x3;

  _0x4bf1cc['fillStyle'] = _0x39c223(0x1a7), _0x4bf1cc[_0x39c223(0x1a1)](0xa, 0xa, _0xa76a0c, _0x3da84a), _0x4bf1cc[_0x39c223(0x1a4)] = _0x39c223(0x1ab), _0x4bf1cc[_0x39c223(0x1a1)](0xa, _0x3da84a + 0x14, _0xa76a0c, _0x3da84a), _0x4bf1cc[_0x39c223(0x1a4)] = _0x39c223(0x1ae), _0x4bf1cc['fillRect'](0xa, _0x3da84a * 0x2 + 0x1e, _0xa76a0c, _0x3da84a);
}

function drawing04(_0x1a9d7e, _0x396bb0) {
  var _0x25c679 = _0x20ca,
      _0x426ee1 = 0x96,
      _0x22b489 = _0x426ee1 * Math[_0x25c679(0x1a9)](0x3) / 0x2,
      _0x52a119 = [_0x1a9d7e[_0x25c679(0x1b1)] / 0x2, _0x1a9d7e[_0x25c679(0x19d)] / 0x2],
      _0x3b0dfe = [_0x52a119[0x0] - _0x426ee1 / 0x2, _0x52a119[0x1] + _0x22b489 / 0x3],
      _0x29d468 = [_0x52a119[0x0] + _0x426ee1 / 0x2, _0x52a119[0x1] + _0x22b489 / 0x3],
      _0x397b32 = [_0x52a119[0x0], _0x52a119[0x1] - _0x22b489 * 0x2 / 0x3],
      _0x108650 = 0x64;

  _0x396bb0[_0x25c679(0x1a4)] = _0x25c679(0x1ac), _0x396bb0[_0x25c679(0x1b5)](), _0x396bb0[_0x25c679(0x1b3)](_0x3b0dfe[0x0], _0x3b0dfe[0x1], _0x108650, 0x0, 0x2 * Math['PI']), _0x396bb0[_0x25c679(0x1a8)](), _0x396bb0['fillStyle'] = _0x25c679(0x1b0), _0x396bb0['beginPath'](), _0x396bb0[_0x25c679(0x1b3)](_0x29d468[0x0], _0x29d468[0x1], _0x108650, 0x0, 0x2 * Math['PI']), _0x396bb0[_0x25c679(0x1a8)](), _0x396bb0[_0x25c679(0x1a4)] = _0x25c679(0x1b4), _0x396bb0['beginPath'](), _0x396bb0[_0x25c679(0x1b3)](_0x397b32[0x0], _0x397b32[0x1], _0x108650, 0x0, 0x2 * Math['PI']), _0x396bb0[_0x25c679(0x1a8)]();
}

function drawing05(_0x1002f3, _0x10085e) {
  var _0x59ba91 = _0x20ca,
      _0x724506 = 0x12c,
      _0x28ee1f = _0x724506 * Math[_0x59ba91(0x1a9)](0x3) / 0x2,
      _0xeb92ff = [_0x1002f3[_0x59ba91(0x1b1)] / 0x2, _0x1002f3['height'] / 0x2],
      _0x4506c9 = [_0xeb92ff[0x0] - _0x724506 / 0x2, _0xeb92ff[0x1] + _0x28ee1f / 0x3],
      _0x5bc05b = [_0xeb92ff[0x0] + _0x724506 / 0x2, _0xeb92ff[0x1] + _0x28ee1f / 0x3],
      _0x3c2002 = [_0xeb92ff[0x0], _0xeb92ff[0x1] - _0x28ee1f * 0x2 / 0x3];

  _0x10085e[_0x59ba91(0x1a4)] = _0x59ba91(0x1a6), _0x10085e[_0x59ba91(0x1b5)](), _0x10085e[_0x59ba91(0x1ad)](_0x4506c9[0x0], _0x4506c9[0x1]), _0x10085e[_0x59ba91(0x1b2)](_0x5bc05b[0x0], _0x5bc05b[0x1]), _0x10085e['lineTo'](_0x3c2002[0x0], _0x3c2002[0x1]), _0x10085e[_0x59ba91(0x1a8)](), _0x10085e[_0x59ba91(0x1b5)](), _0x10085e['fillStyle'] = _0x59ba91(0x1af), _0x10085e[_0x59ba91(0x1ad)]((_0x4506c9[0x0] + _0x3c2002[0x0]) / 0x2, (_0x4506c9[0x1] + _0x3c2002[0x1]) / 0x2), _0x10085e['lineTo']((_0x5bc05b[0x0] + _0x3c2002[0x0]) / 0x2, (_0x5bc05b[0x1] + _0x3c2002[0x1]) / 0x2), _0x10085e[_0x59ba91(0x1b2)](_0x3c2002[0x0], _0x4506c9[0x1]), _0x10085e[_0x59ba91(0x1a8)]();
}

function drawing06(_0x556d8e, _0x1690ad) {
  var _0x5758d7 = _0x20ca,
      _0x4c82f3 = 0x28;

  for (var _0x28e44a = 0x0; _0x28e44a < _0x556d8e[_0x5758d7(0x1b1)] / _0x4c82f3; _0x28e44a++) {
    _0x28e44a % 0x2 == 0x0 ? _0x1690ad[_0x5758d7(0x1a4)] = _0x5758d7(0x1a5) : _0x1690ad[_0x5758d7(0x1a4)] = '#adc8d2', _0x1690ad['fillRect'](_0x4c82f3 * _0x28e44a, 0x0, _0x4c82f3, _0x556d8e[_0x5758d7(0x19d)]);
  }
}

function drawing07(_0x105b39, _0x341ae9) {
  var _0x3acc63 = _0x20ca,
      _0x234eb6 = 0x28,
      _0x1e6e9d = [0xf4, 0xf4, 0xf6],
      _0x3fc733 = [0xad, 0xc8, 0xd2],
      _0xc73568 = [0x0, 0x0, 0x0];

  for (var _0x4353be = 0x0; _0x4353be < 0x3; _0x4353be++) {
    _0xc73568[_0x4353be] = (_0x3fc733[_0x4353be] - _0x1e6e9d[_0x4353be]) / (_0x105b39[_0x3acc63(0x1b1)] / _0x234eb6);
  }

  for (var _0x4353be = 0x0; _0x4353be < _0x105b39['width'] / _0x234eb6; _0x4353be++) {
    _0x341ae9[_0x3acc63(0x1a4)] = _0x3acc63(0x1a2) + (_0x1e6e9d[0x0] + _0x4353be * _0xc73568[0x0]) + ',\x20' + (_0x1e6e9d[0x1] + _0x4353be * _0xc73568[0x1]) + ',\x20' + (_0x1e6e9d[0x2] + _0x4353be * _0xc73568[0x2]), _0x341ae9[_0x3acc63(0x1a1)](_0x234eb6 * _0x4353be, 0x0, _0x234eb6, _0x105b39[_0x3acc63(0x19d)]);
  }
}

function drawing08(_0x10a769, _0x43a778) {
  var _0x4e3d7d = _0x20ca,
      _0x441748 = _0x10a769[_0x4e3d7d(0x1b1)],
      _0x2b5011 = _0x10a769['height'],
      _0x2764ef = 0xa,
      _0xecc2e9 = [0xf4, 0xf4, 0xf6],
      _0x44a0d8 = [0xad, 0xc8, 0xd2],
      _0x2e6fd4 = [0x0, 0x0, 0x0];

  for (var _0x10f334 = 0x0; _0x10f334 < 0x3; _0x10f334++) {
    _0x2e6fd4[_0x10f334] = (_0x44a0d8[_0x10f334] - _0xecc2e9[_0x10f334]) / _0x2764ef;
  }

  for (var _0x10f334 = 0x0; _0x10f334 < _0x2764ef; _0x10f334++) {
    _0x43a778[_0x4e3d7d(0x1a4)] = _0x4e3d7d(0x1a2) + (_0xecc2e9[0x0] + _0x10f334 * _0x2e6fd4[0x0]) + ',\x20' + (_0xecc2e9[0x1] + _0x10f334 * _0x2e6fd4[0x1]) + ',\x20' + (_0xecc2e9[0x2] + _0x10f334 * _0x2e6fd4[0x2]), _0x43a778['fillRect'](0x0, _0x10f334 * _0x2b5011 / _0x2764ef, (_0x2764ef - _0x10f334) / _0x2764ef * _0x441748, (_0x2764ef - _0x10f334) / _0x2764ef * _0x2b5011);
  }
}

function drawing09(_0x389f96, _0x24a882) {
  var _0x8fb81d = _0x20ca,
      _0x49718e = [_0x389f96[_0x8fb81d(0x1b1)] / 0x2, _0x389f96[_0x8fb81d(0x19d)] / 0x2],
      _0x1b8ea0 = 0xc8,
      _0x1ab658 = 0x14,
      _0x8c594c = [0xf4, 0xf4, 0xf6],
      _0x6c43d2 = [0xad, 0xc8, 0xd2],
      _0x473f87 = [0x0, 0x0, 0x0];

  for (var _0x2bef48 = 0x0; _0x2bef48 < 0x3; _0x2bef48++) {
    _0x473f87[_0x2bef48] = (_0x6c43d2[_0x2bef48] - _0x8c594c[_0x2bef48]) / _0x1ab658;
  }

  for (var _0x2bef48 = 0x0; _0x2bef48 < _0x1ab658; _0x2bef48++) {
    _0x24a882[_0x8fb81d(0x1a4)] = _0x8fb81d(0x1a2) + (_0x8c594c[0x0] + _0x2bef48 * _0x473f87[0x0]) + ',\x20' + (_0x8c594c[0x1] + _0x2bef48 * _0x473f87[0x1]) + ',\x20' + (_0x8c594c[0x2] + _0x2bef48 * _0x473f87[0x2]), _0x24a882[_0x8fb81d(0x1b5)](), _0x24a882[_0x8fb81d(0x1b3)](_0x49718e[0x0], _0x49718e[0x1], _0x1b8ea0, _0x2bef48 * Math['PI'] * 0x2 / _0x1ab658, (_0x2bef48 + 0x1) * Math['PI'] * 0x2 / _0x1ab658), _0x24a882[_0x8fb81d(0x1b2)](_0x49718e[0x0], _0x49718e[0x1]), _0x24a882[_0x8fb81d(0x1a8)]();
  }
}

function drawing10(_0x3dfa03, _0x3c4bf0) {
  var _0xc1eec3 = _0x20ca,
      _0xd253c5 = [_0x3dfa03[_0xc1eec3(0x1b1)] / 0x2, _0x3dfa03[_0xc1eec3(0x19d)] / 0x2],
      _0xb5208 = 0xc8,
      _0x51587d = 0x32,
      _0x52bc00 = 0x1e;
  _0x3c4bf0[_0xc1eec3(0x1a4)] = _0xc1eec3(0x19e), _0x3c4bf0[_0xc1eec3(0x1b5)](), _0x3c4bf0[_0xc1eec3(0x1b3)](_0xd253c5[0x0], _0xd253c5[0x1], _0xb5208, Math['PI'], Math['PI'] * 0x2), _0x3c4bf0['fill'](), _0x3c4bf0[_0xc1eec3(0x1a4)] = _0xc1eec3(0x1af), _0x3c4bf0[_0xc1eec3(0x1b5)](), _0x3c4bf0['arc'](_0xd253c5[0x0], _0xd253c5[0x1], _0x51587d, 0x0, Math['PI'] * 0x2), _0x3c4bf0[_0xc1eec3(0x1a8)](), _0x3c4bf0['strokeStyle'] = _0xc1eec3(0x19f), _0x3c4bf0[_0xc1eec3(0x1a0)] = 0x5, _0x3c4bf0['beginPath'](), _0x3c4bf0[_0xc1eec3(0x1b5)](), _0x3c4bf0['arc'](_0xd253c5[0x0], _0xd253c5[0x1], _0x52bc00, 0x0, Math['PI'] * 0x2), _0x3c4bf0['stroke'](), _0x3c4bf0[_0xc1eec3(0x1a0)] = 0xa, _0x3c4bf0[_0xc1eec3(0x1b5)](), _0x3c4bf0[_0xc1eec3(0x1b3)](_0xd253c5[0x0], _0xd253c5[0x1], _0xb5208, 0x0, Math['PI'] * 0x2), _0x3c4bf0[_0xc1eec3(0x1a3)](), _0x3c4bf0[_0xc1eec3(0x1a0)] = 0xf, _0x3c4bf0[_0xc1eec3(0x1b5)](), _0x3c4bf0[_0xc1eec3(0x1ad)](_0xd253c5[0x0] - _0xb5208, _0xd253c5[0x1]), _0x3c4bf0['lineTo'](_0xd253c5[0x0] - _0x51587d, _0xd253c5[0x1]), _0x3c4bf0[_0xc1eec3(0x1ad)](_0xd253c5[0x0] + _0x51587d, _0xd253c5[0x1]), _0x3c4bf0[_0xc1eec3(0x1b2)](_0xd253c5[0x0] + _0xb5208, _0xd253c5[0x1]), _0x3c4bf0[_0xc1eec3(0x1b3)](_0xd253c5[0x0], _0xd253c5[0x1], _0x51587d, 0x0, Math['PI'] * 0x2), _0x3c4bf0[_0xc1eec3(0x1a3)]();
}

function drawing11(_0x4c28c5, _0x3789bb) {
  var _0x26558a = _0x20ca,
      _0x855b39 = 0x14;

  for (var _0x5b3058 = 0x0; _0x5b3058 < _0x4c28c5['width'] / _0x855b39; _0x5b3058++) {
    for (var _0x239f07 = 0x0; _0x239f07 < _0x4c28c5['height'] / _0x855b39; _0x239f07++) {
      (_0x5b3058 + _0x239f07) % 0x2 == 0x0 ? _0x3789bb[_0x26558a(0x1a4)] = _0x26558a(0x1a5) : _0x3789bb[_0x26558a(0x1a4)] = '#adc8d2', _0x3789bb['fillRect'](_0x855b39 * _0x5b3058, _0x855b39 * _0x239f07, _0x855b39, _0x855b39);
    }
  }
}

function drawing12(_0x4a9b95, _0x1d35d4) {
  var _0x59ef41 = _0x20ca,
      _0x4f7fbc = 0x28,
      _0x535a9d = [0xff / (_0x4a9b95[_0x59ef41(0x1b1)] / _0x4f7fbc), 0xff / (_0x4a9b95['height'] / _0x4f7fbc)];

  for (var _0x3bbbf7 = 0x0; _0x3bbbf7 < _0x4a9b95[_0x59ef41(0x1b1)] / _0x4f7fbc; _0x3bbbf7++) {
    for (var _0x2d19cc = 0x0; _0x2d19cc < _0x4a9b95[_0x59ef41(0x19d)] / _0x4f7fbc; _0x2d19cc++) {
      _0x1d35d4[_0x59ef41(0x1a4)] = 'rgb(' + (_0x3bbbf7 + 0x1) * _0x535a9d[0x0] + ',\x20' + (_0x2d19cc + 0x1) * _0x535a9d[0x1] + ',\x20' + 0xff + ')', _0x1d35d4[_0x59ef41(0x1a1)](_0x4f7fbc * _0x3bbbf7, _0x4f7fbc * _0x2d19cc, _0x4f7fbc, _0x4f7fbc);
    }
  }
}

function drawing13(_0x5776e8, _0x228ad6) {
  var _0x2125a6 = _0x20ca,
      _0x5caf6c = 0x28,
      _0x5e84d3 = [0xff / (_0x5776e8[_0x2125a6(0x1b1)] / _0x5caf6c), 0xff / (_0x5776e8['height'] / _0x5caf6c)],
      _0x3fc461 = [Math['PI'] / (_0x5776e8[_0x2125a6(0x1b1)] / _0x5caf6c), Math['PI'] / (_0x5776e8['height'] / _0x5caf6c)];

  for (var _0x4030b2 = 0x0; _0x4030b2 < _0x5776e8[_0x2125a6(0x1b1)] / _0x5caf6c; _0x4030b2++) {
    for (var _0x3bcd90 = 0x0; _0x3bcd90 < _0x5776e8[_0x2125a6(0x19d)] / _0x5caf6c; _0x3bcd90++) {
      _0x228ad6['fillStyle'] = _0x2125a6(0x1a2) + _0x4030b2 * _0x5e84d3[0x0] + ',\x20' + _0x3bcd90 * _0x5e84d3[0x1] + ',\x20' + 0xff + ')', _0x228ad6[_0x2125a6(0x1b5)](), _0x228ad6[_0x2125a6(0x1a0)] = 0x2, _0x228ad6[_0x2125a6(0x1b3)](_0x4030b2 * _0x5caf6c + _0x5caf6c / 0x2, _0x3bcd90 * _0x5caf6c + _0x5caf6c / 0x2, _0x5caf6c * 0x2 / 0x5, 0x0, _0x3fc461[0x0] * _0x4030b2 + _0x3fc461[0x1] * _0x3bcd90), _0x228ad6[_0x2125a6(0x1a8)]();
    }
  }
}

function drawing14(_0x34f144, _0x264715) {
  var _0x5280e7 = _0x20ca,
      _0x4f9671 = 0x64,
      _0x53c390 = 0xa;

  for (var _0x878691 = 0x0; _0x878691 < _0x34f144[_0x5280e7(0x1b1)] / _0x4f9671; _0x878691++) {
    for (var _0x512cb6 = 0x0; _0x512cb6 < _0x34f144[_0x5280e7(0x19d)] / _0x4f9671; _0x512cb6++) {
      (_0x878691 + _0x512cb6) % 0x2 == 0x0 ? _0x264715[_0x5280e7(0x1a4)] = _0x5280e7(0x1a5) : _0x264715[_0x5280e7(0x1a4)] = _0x5280e7(0x1aa);

      _0x264715['fillRect'](_0x4f9671 * _0x878691, _0x4f9671 * _0x512cb6, _0x4f9671, _0x4f9671);

      for (var _0x27ec94 = 0x0; _0x27ec94 < _0x4f9671 / (_0x53c390 * 0x2); _0x27ec94++) {
        for (var _0x34d9e2 = 0x0; _0x34d9e2 < _0x4f9671 / (_0x53c390 * 0x2); _0x34d9e2++) {
          (_0x878691 + _0x512cb6) % 0x2 == 0x0 ? _0x27ec94 == _0x34d9e2 ? _0x264715[_0x5280e7(0x1a4)] = '#f4f4f6' : _0x264715[_0x5280e7(0x1a4)] = _0x5280e7(0x1aa) : _0x27ec94 == _0x34d9e2 ? _0x264715[_0x5280e7(0x1a4)] = _0x5280e7(0x1aa) : _0x264715['fillStyle'] = _0x5280e7(0x1a5), _0x264715[_0x5280e7(0x1b5)](), _0x264715[_0x5280e7(0x1b3)](_0x4f9671 * _0x878691 + _0x53c390 * 0x2 * _0x27ec94 + _0x53c390, _0x4f9671 * _0x512cb6 + _0x53c390 * 0x2 * _0x34d9e2 + _0x53c390, _0x53c390, 0x0, Math['PI'] * 0x2), _0x264715['fill']();
        }
      }
    }
  }
}

function drawing15(_0x2d4dea, _0x3f4be3) {}
},{}],"dist/index.js":[function(require,module,exports) {
"use strict";

var drawings = _interopRequireWildcard(require("./drawings"));

var expected = _interopRequireWildcard(require("./expected"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var drawingCvs = document.getElementById("drawing");
var expectedCvs = document.getElementById("expected");
var drawingCtx = drawingCvs.getContext("2d");
var expectedCtx = expectedCvs.getContext("2d");
var buttons = document.getElementById("buttons");
var NB_DRAWINGS = 15;
var buttonsString = "";

for (var i = 1; i <= NB_DRAWINGS; i++) {
  buttonsString += "<button id=\"" + i + "\" >Dessin n\xB0" + i + "</button>";
}

var doubleDigitsFormat = new Intl.NumberFormat("en-IN", {
  minimumIntegerDigits: 2
});
buttons.innerHTML = buttonsString;

var _loop_1 = function _loop_1(i) {
  document.getElementById("" + i).onclick = function () {
    eraseCanvas();
    drawings["drawing" + doubleDigitsFormat.format(i)].apply(this, [drawingCvs, drawingCtx]);
    expected["drawing" + doubleDigitsFormat.format(i)].apply(this, [expectedCvs, expectedCtx]);
  };
};

for (var i = 1; i < NB_DRAWINGS; i++) {
  _loop_1(i);
}

document.getElementById("15").onclick = function () {
  eraseCanvas();
  drawings.drawing15(drawingCvs, drawingCtx);
  drawings.drawing15(expectedCvs, expectedCtx);
};

function eraseCanvas() {
  drawingCtx.clearRect(0, 0, drawingCvs.width, drawingCvs.height);
  expectedCtx.clearRect(0, 0, expectedCvs.width, expectedCvs.height);
}
},{"./drawings":"dist/drawings.js","./expected":"dist/expected.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39909" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/index.js"], null)
//# sourceMappingURL=/dist.de44d8ea.js.map