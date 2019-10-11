class Matrix {
    constructor(r, c) {
        this.rows = r;
        this.columns = c;
        this.data = [];
        var i, j;
        for (i = 0; i < this.rows; i++) {
            this.data.push([]);
            for (j = 0; j < this.columns; j++) {
                this.data[i].push(0);
            }
        }
    }

    set values(v) {
        var i, j, idx;
        // v is already a 2d array with dims equal to rows and columns
        if (v instanceof Array && v.length === this.rows && v[0] instanceof Array && v[0].length === this.columns) {
            this.data = v;
        }
        // not valid
        else {
            console.log("could not set values for " + this.rows + "x" + this.columns + " maxtrix");
        }
    }

    get values() {
        return this.data.slice();
    }

    // matrix multiplication (this * rhs)
    mult(rhs) {
        var result = null;
		console.log("Does this work");
        // ensure multiplication is valid
        if (rhs instanceof Matrix && this.columns === rhs.rows) {
            // implement matrix multiplication here!
			result = new Matrix(this.rows, rhs.columns);
			for(var r = 0; r < this.rows; r++){
				for(var c = 0; c < rhs.columns; c++){
					for(var i = 0; i < this.columns; i++){
						result.data[r][c] += this.data[r][i] * rhs.data[i][c];
						
					}
				}
			}
			
			
        }
        else {
            console.log("could not multiply - row/column mismatch");
        }
		//result = 33;
        return result;
    }
}

Matrix.multiply = function(...args) {
    var i;
    var result = null;
    // ensure at least 2 matrices
    if (args.length >= 2 && args.every((item) => {return item instanceof Matrix;})) {
        result = args[0];
        i = 1;
        while (result !== null && i < args.length) {
            result = result.mult(args[i]);
            i++;
        }
    }
    else {
        console.log("could not multiply - requires at least 2 matrices");
    }
    return result;
}
