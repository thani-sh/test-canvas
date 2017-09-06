const ctx = experiment.canvas.getContext('2d');

experiment.select = shape => {
    shape.selected = true;
};

experiment.unselect = shape => {
    shape.selected = false;
};

experiment.render = () => {
    ctx.clearRect(0, 0, experiment.canvas.width, experiment.canvas.height);
    for (let i=0, l=experiment.shapes.length; i<l; i++) {
        const shape = experiment.shapes[i];
        if (shape.selected) {
            ctx.fillStyle = 'rgb(70,70,70)';
        } else {
            ctx.fillStyle = 'rgb(170,170,170)';
        }
        ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
    }
};

experiment.before = () => {
};
