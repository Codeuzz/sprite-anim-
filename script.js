const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");
canvas.width = 845;  
canvas.height = 580;

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`echec load image: ${src}`));
    });
}

async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`echec load JSON: ${url}`);
    }
    return response.json();
}

async function drawBackgrounds() {
    const images = [
        'assets/img/Sky_Background_0.png',
        'assets/img/Sky_Background_1.png',
        'assets/img/Sky_Background_2.png'
    ];

    for (const src of images) {
        const img = await loadImage(src);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

async function getBirdSpriteData() {
    return await fetchJSON('assets/data/Bird_Spritesheet.json');
}

function getSpriteFrames(spriteData) {
    return spriteData.sprites.reduce((acc, sprite) => {
        acc[sprite.name] = sprite;
        return acc;
    }, {});
}

function drawFrame(spriteSheet, frame, x, y) {
    context.drawImage(
        spriteSheet,
        frame.x, frame.y, frame.width, frame.height,
        x, y, frame.width / 4, frame.height / 4
    );
}


async function animateBird() {
    const spriteData = await getBirdSpriteData();
    const spriteSheet = await loadImage(spriteData.file);
    const sprites = getSpriteFrames(spriteData);

    const animation = spriteData.animations.find(anim => anim.name === 'fly');
    const frameRate = 1000 / animation.frameRate;
    const frames = animation.frames.map(frameName => sprites[frameName]);

    let currentFrame = 0;
    const birdX = 0; 
    const birdY = 0; 
    

    function updateAnimation() {
        const frame = frames[currentFrame];
        context.clearRect(birdX, birdY, frame.width, frame.height);

        
        drawBackgrounds().then(() => {
           
            drawFrame(spriteSheet, frame, birdX, birdY);
            currentFrame = (currentFrame + 1) % frames.length ;
        });
    }

    setInterval(updateAnimation, frameRate);
}


async function init() {
     drawBackgrounds();
     animateBird();
}

init();