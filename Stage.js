var tempHouse = new Sprite();
tempHouse.x = 0; 
tempHouse.y = 10;
tempHouse.index = 1;
tempHouse.width = 200;
tempHouse.height = canvas.height;
tempHouse.image = Textures.load("https://lh4.googleusercontent.com/1XZ4tdTTJpjs5dGYTAzDZvLHtl9-Ngd0uOd7gYms8DhKw5xBJXzBy1im4xZHJLfjq_iHRyUExpo=w2560-h1275");

var background = new Sprite();
background.x = 0;
background.y = 0;
background.index = 3;
background.width = canvas.width;
background.height = canvas.height; 
background.image = Textures.load("https://lh6.googleusercontent.com/kpSQk61f97dG5rSSE1GNr1vUSNd8IGuEk-fA5keF9agFo0i2jT7Fh3PDIat0ftUyyE4MgsLhBrE=w2560-h1275");

var fence = new Sprite();
fence.x = 0;
fence.y = canvas.height/2 - 100;
fence.index = 2;
fence.width = canvas.width; 
fence.image = Textures.load("https://lh3.googleusercontent.com/vsoq8kTlsenQcKqLsIpcQb0jx3H6UJ8anIT6mqLLVHbiexeH_Ar_KlSOj9vESn9olgLpDcae_Js=w2560-h1275");


var Grid = function(rows, cols, tileSize, tileType) {
    //Inner class for the level which draws each tile individually.
    //i = row #, j = col #
    var Tile = function(i, j, tileSize, tileType) {
        var tileSprite = new Sprite();
        //X.Starting_Position = 1/5 of the canvas width - the offset for the tile Sprite
                //Then add the length of each tile - that same offset. 
        //Y.Starting_Position = 1/2 of the canvas height + the height of each lane. 
        tileSprite.x = (canvas.width/5 - i*(tileSize*0.2)) + (i*tileSize - j*(tileSize*0.18));
        tileSprite.y = canvas.height/2 + j*tileSize;
        tileSprite.index = 0;
        tileSprite.width = tileSize;
        tileSprite.height = tileSize;
        tileSprite.image = Textures.load(tileType);
        world.addChild(tileSprite);
       };
    //Number of rows, columns, and the size of each tile.
    this.rows = rows;
    this.cols = cols;
    this.tileSize = tileSize;
    this.tiles = [];
    //Nested for loop initiallized each tile.
    for (var i = 0; i < cols; i++) {
        this.tiles[i] = [];        
        for (var j = 0; j < rows; j++) {
            this.tiles[i][j] = new Tile(i, j, tileSize, tileType);
        }
    }
};

function gameInit (){
    var tileType = "https://lh4.googleusercontent.com/6bI6Vf6_xhaxN-X54iJNKydf-qcYisjo0fMiHeSQ5BNkqOG0-4U5Nksj1pPlWQASNKDoJ-dU6dA=w2560-h1275";
    
    world.addChild(background);
    world.addChild(fence);
    world.addChild(tempHouse);
    var grid = new Grid(5, 15, canvas.height/10, tileType);
}
