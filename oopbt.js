const readline = require('readline-sync');

//lopPoint2D
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    scan(x, y) {
        this.x = Number(readline.question("nhap x: "));
        this.y = Number(readline.question("nhap y: "));
    }

    print() {
        console.log("x: " + this.x);
        console.log("y: " + this.y);
    }
 
    move(dx, dy) {
        this.dx = Number(readline.question("nhap dx: "));
        this.dy = Number(readline.question("nhap dy: "));
        console.log("toa do x sau khi doi: " + (this.x + this.dx));
        console.log("toa do y sau khi doi: " + (this.y + this.dy));
    }

    getDistance(P2) {
        console.log("khoang cach giua 2 diem la: " + (Math.sqrt((P2.x - this.x)**2 + (P2.y - this.y)**2)));
    }
}

function main() {
    console.log("lopPoint2D");
    let P1 = new Point2D(0, 0);
    P1.scan();
    P1.print();
    P1.move();
    let P2 = new Point2D(0, 0);
    P2.scan();
    P1.getDistance(P2);
}

main();

// lopCircle
class lopCircle extends Point2D {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    scan(x, y, r) {
        this.x = Number(readline.question("nhap x: "));
        this.y = Number(readline.question("nhap y: "));
        this.r = Number(readline.question("nhap r: "));
        if (this.r <= 0) {
            console.log("r ko hop le");
        }
    }

    getArea1() {
        if (this.r <= 0) {
            console.log("r ko hop le nen ko tinh nha");
        } else {
            console.log("dien tich hinh tron: " + (this.r ** 2 * 3.14));
        }
    }
}

function main1() {
    console.log("lopCircle");
    let P1 = new lopCircle(0, 0, 0);
    P1.scan();
    P1.print();
    P1.move();
    P1.getArea1();
}

main1();

// lopRectangle
class lopRectangle extends Point2D {
    constructor(x, y, w, h) {
        super(x,y);
        this.w = w;
        this.h = h;
    }

    scan(x, y, w, h) {
        this.x = Number(readline.question("nhap x: "));
        this.y = Number(readline.question("nhap y: "));
        this.w = Number(readline.question("nhap w/h: "));
        this.h = Number(readline.question("nhap h/w: "));
        if (this.w <= 0 || this.h <= 0) {
            console.log("w/h ko hop le");
        } else if (this.w === this.h) {
            console.log("day la hinh vuong nha");
        }
    }

    getArea2() {
        if (this.w <= 0 || this.h <= 0) {
            console.log("ko tinh dien tich do lam gi nhau");
        } else if (this.w === this.h) {
            console.log("ko tinh dien tich do lam gi nhau");
        } else {
            console.log("dien tich hinh chu nhat: " + (this.w * this.h));
        }
    }
}

function main2() {
    console.log("lopRectangle");
    let P1 = new lopRectangle(0, 0, 0, 0);
    P1.scan();
    P1.print();
    P1.move();
    P1.getArea2();
}

main2();

//lopSquare
class lopSquare extends Point2D {
    constructor(x, y, c) {
        super(x,y);
        this.c = c;
    }

    scan(x, y, c) {
        this.x = Number(readline.question("nhap x: "));
        this.y = Number(readline.question("nhap y: "));
        this.c = Number(readline.question("nhap c: "));
        if (this.c <= 0) {
            console.log("c ko hop le");
        }
    }

    getArea3() {
        if (this.c <= 0) {
            console.log("c ko hop le nen ko tinh");
        } else {
            console.log("dien tich hinh vuong: " + (this.c ** 2));
        }
    }
}

function main3() {
    console.log("lopSquare");
    let P1 = new lopSquare(0, 0, 0);
    P1.scan();
    P1.print();
    P1.move();
    P1.getArea3();
}

main3();