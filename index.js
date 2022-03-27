
function draw() {

    const canvas = document.getElementById("myCanvas")
    
    const ctx = canvas.getContext("2d");

    canvas.style.backgroundColor = 'skyblue'

    const house = new Image()
    house.onload = () => {
        ctx.drawImage(house,350,350, 150,150)
    }

    house.src = 'https://pics.clipartpng.com/midle/House_Yellow_PNG_Clip_Art-2415.png'

    const tree = new Image()
    tree.onload = () => {
        ctx.drawImage(tree,410,400,100,100)
    }
    tree.src = 'https://pics.clipartpng.com/midle/Realistic_Green_Tree_PNG_Clip_Art-1102.png'

    const sun = new Image()
    sun.onload = () => {
        ctx.drawImage(sun, 400, -50, 150, 150)
    }
    sun.src = "https://pics.clipartpng.com/midle/Sun_Weather_Icon_PNG_Clip_Art-1517.png"


    const clouds = new Image()
    clouds.onload = () => {
        ctx.drawImage(clouds, 0, 0, 300, 200)
        ctx.drawImage(clouds, 250, 40, 300, 200)
    }
    clouds.src = "https://pics.clipartpng.com/midle/Cumulus_Cloud_PNG_Clipart-872.png"

    const mountains = new Image()
    mountains.onload = () => {
        ctx.drawImage(mountains,0,0)
    }

    mountains.src = './images/pngwing.com.png'

    const grass = new Image()

    grass.onload = () => {

        for(let i = 0; i < 50; i++) {
            ctx.drawImage(grass, -10 + (i*10), 480, 30,30)
        }
    }
    grass.src = './images/grass.png'


    const horse = new Image ()
    horse.onload = () => {
        ctx.drawImage(horse,0,450,50,50)
    }

    horse.src = './images/horse.png'


    const farmer = new Image()
    farmer.onload = () => {
        ctx.drawImage(farmer,70,450,30,50)
    }

    farmer.src = './images/farmer.png'

    const dog = new Image()
    dog.onload = () => {
        ctx.drawImage(dog,190,460,50,50)
    }

    dog.src = './images/dog.png'

    const kid = new Image()
    kid.onload = () => {
        ctx.drawImage(kid,260,460,40,40)
    }
    kid.src = './images/kid.png'
    
}

draw()

