"use strict";
exports.__esModule = true;
function drawing01(canvas, context) {
    var side = 20;
    var margin = 10;
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(margin, margin, side, side);
    context.fillStyle = "rgb(0, 255, 0)";
    context.fillRect(margin * 7, margin, side, side);
    context.fillStyle = "rgb(0, 0, 255)";
    context.fillRect(margin * 13, margin, side, side);
}
exports.drawing01 = drawing01;
function drawing02(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var margin = 10;
    //context.fillStyle = "rgb(255,0,0)";
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
    context.fillRect(margin * 3 + ((width - margin * 4) / 3) * 2, margin, (width - margin * 4) / 3, height - margin * 2);
}
exports.drawing02 = drawing02;
function drawing03(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var margin = 10;
    context.fillStyle = "rgb(255,0,0)";
    context.fillRect(margin, margin, width - margin * 2, (height - 4 * margin) / 3);
    context.fillStyle = "rgb(0,255,0)";
    context.fillRect(margin, margin * 2 + (height - 4 * margin) / 3, width - margin * 2, (height - 4 * margin) / 3);
    context.fillStyle = "rgb(0,0,255)";
    context.fillRect(margin, margin * 3 + ((height - 4 * margin) / 3) * 2, width - margin * 2, (height - 4 * margin) / 3);
    //context.fillStyle = "rgb(255,0,0)";
    //context.fillRect (margin,margin,780,(560/3))
    //context.fillStyle = "rgb(0,255,0)";
    //context.fillRect (margin,margin*2+(560/3),780,(560/3))
    //context.fillStyle = "rgb(0,0,255)";
    //context.fillRect (margin,margin*3+(560/3)*2,780,(560/3))
}
exports.drawing03 = drawing03;
function drawing04(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var side = 150;
    var triangleHeight = (side * Math.sqrt(3)) / 2;
    var center = [width / 2, height / 2];
    var a = [center[0] - side / 2, center[1] + triangleHeight / 3];
    var b = [center[0] + side / 2, center[1] + triangleHeight / 3];
    var c = [center[0], center[1] - (triangleHeight * 2) / 3];
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
exports.drawing04 = drawing04;
function drawing05(canvas, context) {
    var side = 300;
    var width = canvas.width;
    var height = canvas.height;
    var center = [width / 2, height / 2];
    var triangleHeight = ((side * Math.sqrt(3)) / 2);
    var a = [center[0] - side / 2, center[1] + triangleHeight / 3];
    var b = [center[0] + side / 2, center[1] + triangleHeight / 3];
    var c = [center[0], center[1] - (triangleHeight * 2) / 3];
    context.beginPath();
    context.fillStyle = "#d4ce46";
    context.moveTo(a[0], a[1]);
    context.lineTo(c[0], c[1]);
    context.lineTo(b[0], b[1]);
    context.lineTo(a[0], a[1]);
    context.lineTo((c[0] - a[0]) / 2 + a[0], (a[1] - c[1]));
    context.lineTo((b[0] - c[0]) / 2 + c[0], (b[1] - c[1]));
    context.lineTo(a[0] + side / 2, center[1] + triangleHeight / 3);
    context.lineTo((c[0] - a[0]) / 2 + a[0], (a[1] - c[1]));
    context.fill("evenodd");
}
exports.drawing05 = drawing05;
function drawing06(canvas, context) {
    var rectWidth = 40;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
    for (var i = 0; i * rectWidth < canvas.width; i++) {
        if (i % 2 == 0) {
            context.fillStyle = lightColor;
            context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
        }
        else if (i % 2 == 1) {
            context.fillStyle = darkColor;
            context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
        }
    }
}
exports.drawing06 = drawing06;
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
        context.fillStyle = "rgb(" + couleurRectanglesX + "," + couleurRectanglesY + "," + couleurRectanglesZ + ")";
        //console.log(couleurRectanglesX);
        //console.log(couleurRectanglesY);
        //console.log(couleurRectanglesZ);
        context.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
    }
}
exports.drawing07 = drawing07;
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
        context.fillRect(0, (canvas.height / nbRectangles) * i, canvas.width - (canvas.width / nbRectangles) * i, canvas.height - (canvas.height / nbRectangles) * i);
        console.log(0, (canvas.height / nbRectangles) * i, canvas.width - (canvas.width / nbRectangles) * i, canvas.height - (canvas.height / nbRectangles) * i);
    }
}
exports.drawing08 = drawing08;
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
        context.arc(center[0], center[1], radius, 2 * Math.PI / (20) * i, 0 * Math.PI, true);
        context.lineTo(center[0], center[1]);
        context.fill();
    }
}
exports.drawing09 = drawing09;
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
exports.drawing10 = drawing10;
function drawing11(canvas, context) {
    var side = 20;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
    for (var j = 0; j * side < canvas.height; j++) {
        for (var i = 0; i * side < canvas.width; i++) {
            if (i % 2 == 0 && j % 2 == 0) {
                context.fillStyle = lightColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else if (i % 2 == 1 && j % 2 == 0) {
                context.fillStyle = darkColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else if (i % 2 == 0 && j % 2 == 1) {
                context.fillStyle = darkColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else {
                context.fillStyle = lightColor;
                context.fillRect(i * side, j * side, side, side);
            }
        }
    }
}
exports.drawing11 = drawing11;
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
exports.drawing12 = drawing12;
function drawing13(canvas, context) {
    var side = 40;
    var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
    var blueColor = 255;
    var arcSteps = [Math.PI / (canvas.width / side), Math.PI / (canvas.height / side)];
    for (var j = 0; j * side < canvas.height; j++) {
        for (var i = 0; i * side < canvas.width; i++) {
            context.fillStyle = "rgb(" + redGreenSteps[0] * i + "," + redGreenSteps[1] * j + "," + blueColor + ")";
            context.beginPath();
            context.arc(side * i + side / 2, side * j + side / 2, canvas.width / 50, arcSteps[1] * (j) + arcSteps[0] * (i), 0, true);
            context.fill();
            //context.beginPath();
            //context.arc(50,50,200,0,Math.PI,false)
            //context.fill();
        }
    }
}
exports.drawing13 = drawing13;
function drawing14(canvas, context) {
    var side = 100;
    var radius = 10;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
    for (var j = 0; j * side < canvas.height; j++) {
        for (var i = 0; i * side < canvas.width; i++) {
            if (i % 2 == 0 && j % 2 == 0) {
                context.fillStyle = lightColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else if (i % 2 == 1 && j % 2 == 0) {
                context.fillStyle = darkColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else if (i % 2 == 0 && j % 2 == 1) {
                context.fillStyle = darkColor;
                context.fillRect(i * side, j * side, side, side);
            }
            else {
                context.fillStyle = lightColor;
                context.fillRect(i * side, j * side, side, side);
            }
        }
    }
}
exports.drawing14 = drawing14;
function drawing15(canvas, context) {
}
exports.drawing15 = drawing15;
