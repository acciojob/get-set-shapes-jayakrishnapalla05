//complete this code
class Rectangle {
	constructor(width, height)
	{
		this._width=width;
		this._height=height;
	}
	get width(){
		this._width=width;
	}
	get height(){
		this._height=height;
	}
	getArea(){
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	constructor(side)
	{
		super(side,side);
	}
	getPerimeter(){
		return 4*this._width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
