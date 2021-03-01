class Bird extends Main{
    constructor(x, y) {
       super(x,y,50,50)
      
        this.image= loadImage("bird.png")
        
        
      }
      show(){
        push()
        var pos =this.body.position;
        pos.x=  mouseX;
        pos.y= mouseY;
     
        super.show();
      }
}