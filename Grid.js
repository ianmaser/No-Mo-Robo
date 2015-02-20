use2D = true;
initGame("canvas");

//Level object. Takes number of rows and columns for the 2D array of tiles and the size of each tile. 
//Level takes in (# of rows, # of columns, size of each tile, and the type of tile).
var Grid = function(rows, cols, tileSize, tileType) {
    
    //Inner class for the level which draws each tile individually.
    //i = row #, j = col #
    var Tile = function(i, j, tileType, tileSize) {
        var tileSprite = new Sprite();
        tileSprite.x = (canvas.width/5 - i*(tileSize*0.2)) + (i*tileSize - j*(tileSize*0.18));
        tileSprite.y = canvas.height/2 + j*tileSize;
        tileSprite.width = tileSize;
        tileSprite.height = tileSize;
        tileSprite.xoffset = -tileSprite.width/2;
        tileSprite.yoffset = -tileSprite.height/2;
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
            this.tiles[i][j] = new Tile(i, j, tileType, tileSize);
        }
    }
};

function gridInit(difficulty){
        //Will change to match the parameter in the future.
        /*
        if (difficulty == "hard")
        _difficulty = 2;
        else if (difficulty =="medium")
        _difficulty = 1;
        else if (difficulty == "easy")
        _difficulty = 0;
        */
        var _difficulty = 0; 
        var tileTypes = [];
tileTypes.push("https://lh4.googleusercontent.com/QRiGqDOYH21EPNiiviNuOj9-lC5I620T0SlzuHccQAAiu8S-XJAxSgFEt8Jr0KAvri59gUVaUhM=w2560-h1372");
        switch(_difficulty) {
            case 2:
                console.log("Hardmode");
                break;
            case 1:
                console.log("Medimode");
                break;
            case 0:
                var grid = new Grid(5, 13, canvas.height/9, tileTypes[0]);
                world.addChild(grid);
                break;
        }
}

gridInit("easy");
