const stage = new createjs.Stage(experiment.canvas);

experiment.shapes.forEach(shape => {
    shape.view = new createjs.Shape();
    shape.view.graphics.beginFill(createjs.Graphics.getRGB(170, 170, 170));
    shape.view.graphics.rect(0, 0, shape.w, shape.h);
    shape.view.x = shape.x;
    shape.view.y = shape.y;
    stage.addChild(shape.view);
});

experiment.render = () => {
    stage.update();
};

experiment.before = () => {
    const seconds = Date.now() / 1000;
    experiment.shapes.forEach(shape => {
        shape.view.x = shape.x + 100 * Math.sin(shape.x * shape.y + seconds);
        shape.view.y = shape.y + 100 * Math.sin(shape.x * shape.y + seconds);
    });
};
