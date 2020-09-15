class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.array1= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10&&this.body.position.x>200){
var position= [this.body.position.x,this.body.position.y];
this.array1.push(position);
    }
for (var line=0; line<this.array1.length;line=line+1)
{
  image(this.image1, this.array1[line][0],this.array1[line][1],50, 50);

}    super.display();
  }
}
