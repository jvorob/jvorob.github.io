

/* new TronWidget(canvasEl, cfgObj)
 * Initializes a TronWidget on the given canvas object
 *
 * cfgObj:
 *  grid_size: [width, height]
 *  cell_size: int // in pixels
 *  steps_to_run: //number of steps to run sim for initially
 *  fg_color: "#XXXXXX"
 *  bg_color: "#XXXXXX"
 *  tick_interval: int //millis
 *  seeds: [ [x,y,w,h], ...]
 *    //seeds is an array of rects to fill, relative to seed_start
 *    //can also be "random" to autofill random seed
 *
 *  seed_start: [x, y] //offsets for seeds to be placed
 *    //can also be a string for a preset
 *    //"center"
 *    //"random-horizontal", centered along hor. axis
 *    //"random-vertical", centered along vert. axis
 */
var makeTronWidget = function(canvasEl, config){

    var gc = canvasEl.getContext("2d")
    var grid, timer;




    function resizeCanvas(gc){
        el = $("canvas")[0]
        //gc.canvas.width = el.clientWidth
        //gc.canvas.height = el.clientHeight
        gc.canvas.width = config.grid_size[0] * config.cell_size;
        gc.canvas.height = config.grid_size[1] * config.cell_size;
        repaintCanvas(gc);
    }

    function repaintCanvas(gc){
        gc.fillStyle = (config.bg_color)
        gc.clearRect(0,0,gc.canvas.width, gc.canvas.height)
        grid.draw(gc, config.cell_size, 
            new Vector(0,0), false, config.fg_color)
        //var url = $("canvas")[0].toDataURL('image/jpeg');
        //$("body")[0].style.backgroundImage = 'url(' + url + ')';
    }    


    function rr(a,b){
        return Math.floor(Math.random() * (b - a) + a)
    }

    //Vector gridSize
    //[ [x,y,w,h], ... ] seedRects
    //Vector seedStart
    //int stepsToRun
    function initGrid(gridSize, seedRects, seedStart, stepsTorun) {
        //cfg = cfg || {}
        //cfg.gridSize = cfg.gridSize || new Vector(300,50);
        //cfg.seedStart = cfg.seedStart || new Vector(40,20)
        //cfg.seedRects = cfg.seedRects || []
        //cfg.stepsToRun = cfg.stepsToRun || 400
        //if(! cfg.seedRects.length) {
        //    cfg.seedRects.push([rr(0,500),rr(0,500),rr(1,10),rr(1,10)])
        //    cfg.seedRects.push([rr(0,500),rr(0,500),rr(1,10),rr(1,10)])
        //    cfg.seedRects.push([rr(0,500),rr(0,500),rr(1,10),rr(1,10)])
        //}
        //console.log(cfg.seedRects[0])
    }


    var goodSeeds = [//300,50, run for 400
            [ 0, 0,1,1],
            [ 0, 0,1,2],
            [ 0,-4,1,10],
            [ 0, 0,2,1],
            [ 0, 0,3,1],
            [ 0, 0,3,2],
            [ 0, 0,3,3],
            [ 0, 0,3,4],
            [ 0,-2,3,5],
            [ 0, 0,3,6],
            [ 0, 0,5,6],
            [ 1, 0,2,2],
            [-3,-2,8,4],
            [ 0, 1,2,2],
            [ 0,-4,2,7],
            [-2,-3,4,6],
            [-2, 0,6,3],
            [ 1, 1,2,1],
            [ 0, 1,1,1]
    ];






    console.log(config)

    config.grid_size = config.grid_size || [100, 80]
    config.cell_size = config.cell_size ||  8
    config.steps_to_run = config.steps_to_run || 400
    config.fg_color = config.fg_color || "#8975a3"
    config.bg_color = config.bg_color || "#ddefce"
    config.tick_interval = config.tick_interval || 500

    config.seed_start = config.seed_start || "center"
    config.seeds = config.seeds || "random"

    console.log(config)


/*
 *  seeds: [ [x,y,w,h], ...]
 *    //seeds is an array of rects to fill, relative to seed_start
 *    //can also be "random" to autofill random seed
 *
 *  seed_start: [x, y] //offsets for seeds to be placed
 *    //can also be a string for a preset
 *    //"center"
 *    //"random-horizontal", centered along hor. axis
 *    //"random-vertical", centered along vert. axis
 */
    
    //Handle presets in cfgobj
    if(config.seeds == "random") {
      let seed = goodSeeds[rr(0,goodSeeds.length)]
      console.log(seed)
      config.seeds = [seed]
    }

    

    //pick a seedStart
    if(typeof config.seed_start != "string") {
      //pass
    } else if(config.seed_start == "center") {
      var v = new Vector(config.grid_size[0], config.grid_size[1])
      v = v.scale(1/2)
      config.seed_start = Vector.floor(v);
    } else if(config.seed_start == "random") {
      config.seed_start = new Vector(rr(0,40) * 2, rr(0,25) * 2)
    }



    //Initialize grid
    grid = new Grid(new Vector(config.grid_size[0],config.grid_size[1]))

    function seedCells(x, y, w, h) {
        for(var i = 0; i < w; i++){
            for(var j = 0; j < h;j++){
                grid.setAliveNow(
                config.seed_start.x + x + i, 
                config.seed_start.y + y + j, true)
            }
        }
    }

    //Seed it
    config.seeds.forEach(function(s){seedCells(s[0],s[1],s[2],s[3])})
    //Let it run
    for(var i = 0; i < config.steps_to_run; i++)
        grid.updateTron();



    //setup canvas
    $(window).resize(function(){resizeCanvas(gc)})  
    resizeCanvas(gc)

    //start grid ticking
    function ticker(){
        grid.updateTron();
        repaintCanvas(gc);
    }
    timer = setInterval(ticker, config.tick_interval);


    return {
      timer: timer,
      tick: ticker
    }
};

