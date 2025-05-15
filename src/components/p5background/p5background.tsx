import React from "react";
import Sketch from "react-p5";
import type { SketchProps } from "react-p5";

let angle = 0;

const P5Background: React.FC = () => {
  const setup: SketchProps["setup"] = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.angleMode(p5.DEGREES);
    p5.noFill();
    p5.stroke(50);
    p5.strokeWeight(2);
  };

  const draw: SketchProps["draw"] = (p5) => {
    p5.background(0, 0, 0, 0);
    p5.rotateY(angle);
    p5.rotateX(angle * 0.5);

    p5.ambientLight(100);
    p5.directionalLight(255, 255, 255, 0.5, 1, -0.5);

    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        p5.push();
        p5.rotateZ(zAngle);
        p5.rotateX(xAngle);
        p5.translate(0, 380, 0);
        p5.box(30);
        p5.pop();
      }
    }

    angle += 0.1;
  };

  const windowResized: SketchProps["windowResized"] = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const mouseDragged = () => false;
  const mouseWheel = () => false;
  const touchMoved = () => false;

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      mouseDragged={mouseDragged}
      mouseWheel={mouseWheel}
      touchMoved={touchMoved}
    />
  );
};

export default P5Background;
