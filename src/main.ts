import * as PIXI from "pixi.js"


const main = async () => {
    const app = new PIXI.Application();

    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    app.renderer.backgroundColor = '0xffffff';
    app.renderer.resize(window.innerWidth, window.innerHeight);

    let graphics = new PIXI.Graphics();
    let strokeWeight = 1;
    let r = 0;
    let g = 0;
    let b = 0;
    let color = PIXI.utils.rgb2hex([r,g,b])
    graphics.lineStyle(strokeWeight,color);
    for (let width = 5; width < innerWidth; width += 5){
        graphics.drawRect(innerWidth/2 - width/2, innerHeight/2 - width/2, width, width);
        strokeWeight += 1; r+=.01; g+=.01; b+=.01;
        console.log(r,g,b);
        color = PIXI.utils.rgb2hex([r,g,b])
        console.log(color);
        graphics.lineStyle(strokeWeight,color);
    }


    app.stage.addChild(graphics);
    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    })
    document.body.appendChild(app.view);
};



main();
