class Start{
    constructor(){
      this.startButton = createButton('Start');
      this.helperButton = createButton('Child');
      this.parentButton = createButton('Parent');
      this.input = createInput("Name");
      this.greeting = createElement('h2');
      }
    hide(){
      this.greeting.hide();
      this.input.hide();
      this.startButton.hide();
    }
    display(){
      var title = createElement('h1');
      title.html("Welcome to WeCare");
      title.position(displayWidth/2, displayHeight/2)
      this.startButton.position(displayWidth/2, displayHeight/4);
      this.input.position(displayWidth/2, displayHeight/3);
      this.startButton.mousePressed(()=>{
        this.title.hide();
        this.startButton.hide();
        this.input.hide();
        helper.name = this.input.value();
        helper.update();
        this.greeting.html("Welcome, "+helper.name+", Please choose");
        this.greeting.position(displayWidth/4,displayHeight/2);
        this.helperButton.position(displayWidth/2-200, displayHeight/3);
        this.parentButton.position(displayWidth/2+200, displayHeight/3);
            });
        this.helperButton.mousePressed(()=>{
          appState = "child";
        });
        this.parentButton.mousePressed(()=>{
          appState = "parent";
        });
    }
}