class ComplexNumber{
	constructor(r, i){
		this.r = r
		this.i = i
	}
	add(x){
		return new ComplexNumber(this.r + x.r, this.i + x.i)
	}
	subtract(x){
		return new ComplexNumber(this.r - x.r, this.i - x.i)
	}
	mul(x){
		return new ComplexNumber(this.r*x.r - this.i*x.i, this.r*x.i + this.i*x.r)
	}
	div(x){
		return new ComplexNumber((this.r*x.r + this.i*x.i) / (x.r*x.r + x.i*x.i), (this.i*x.r - this.r*x.i) / (x.r*x.r + x.i*x.i),)
	}
}

var coeffs = [1, -1, 1, 0, 0, 1]


//[2, -1, 1, -9, 7, 1]

//[1, -1, 1, 0, 0, 1]

//
var degree = coeffs.length-1
var roots = []
var d_coeffs = []
var values = []



function getFuncVal(x){
	var x_pow = new ComplexNumber(1, 0)
	var res = new ComplexNumber(0, 0)
	for(var i = 0; i <= degree; i++){
		res = res.add(x_pow.mul(new ComplexNumber(coeffs[i], 0)))
		x_pow = x_pow.mul(x)
	}
	return res
}

function calculateRoots(){
	degree = coeffs.length-1
	d_coeffs = []
	for(var i = 1; i <= degree; i++){
		d_coeffs.push(coeffs[i]*i)
	}
	roots = []
	var oldRoots = []
	roots.push(new ComplexNumber(0.4, 0.9))
	for(var i = 0; i < degree-1; i++){
		roots.push(roots[i].mul(new ComplexNumber(0.4, 0.9)))
	}
	
	for(var step = 0; step < 50; step++){
		oldRoots = roots.slice(0)
		for(var i = 0; i < degree; i++){
			roots[i] = getFuncVal(oldRoots[i])
			for(var k = 0; k < degree; k++){
				if(k == i) continue
				if(k < i) roots[i] = roots[i].div(oldRoots[i].subtract(roots[k]))
				else roots[i] = roots[i].div(oldRoots[i].subtract(oldRoots[k]))
			}
			roots[i] = oldRoots[i].subtract(roots[i])
		}
	}
}

d_coeffs = []
for(var i = 1; i <= degree; i++){
	d_coeffs.push(coeffs[i]*i)
}

roots = [[-1.32471795724475, 0], [0, 1], [0, -1], [0.662358978622373, 0.562279512062301], [0.662358978622373, -0.562279512062301]]

for(var i = 0; i < roots.length; i++){
	roots[i] = new ComplexNumber(roots[i][0], roots[i][1])
}

//calculateRoots()