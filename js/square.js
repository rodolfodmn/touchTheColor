var Square = function(color,posX,posY){

    this.w = W/3,
        this.h = H/6,
        this.move = 0,
        this.ponto = false;
    self = this;

    self.color = color;
    self.posX = posX;
    self.posY = posY;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY, this.w, this.h);
    }

    this.move = function(){
        this.posY += 9;
    }

};
