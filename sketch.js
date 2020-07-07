var helper, parent;
var appState = "start", form;
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();
}
function draw(){
    if(appState == "start"){
        form = new Form();
    }
}