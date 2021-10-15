// Class
class Person {
	// constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const hero = new Person('hero', 20);
console.log(hero.name);
console.log(hero.age);
hero.speak();

// Getter and Setter

class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get age() {
		return this._age();
	}
	
	set age() {
		this._age() = value < 0 ? 0 : value;
	}
	// age() getter를 정의하는 순간 this.age는 
	// 메모리에 올라가 있는 데이터를 읽어 오는 것이 아니라
	// getter를 호출 하게 된다. 

	// 그리고 setter를 정의하는 순간 = age를 할당하는 것이 아니라
	// setter를 호출 하게 된다. 
	// 따라서 set age() 안에 this.age() 를 호출하면 무한 루프를 돌게 됨
	// 이를 방지하기 위해 getter, setter 에 변수명을 다르게 설정해야 한다. 
	// 여기서는 _age() 로 정의함.
}


// Public & Private
// Fields (public, private)

class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// class 내부에서 # 를 붙여 값을 지정하면 
// 내부에서만 값이 보여지고 변경이가능하고 
// 외부에서는 불가 하다. 

// ------------------------------------ //

// Static

class Article {
	static publisher = 'hero';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher);  undefined !!
console.log(Article.publisher);

// 상속 & 다양성

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} colo  of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();


// instanceOf
// class 를 통해서 만들어진 새로운 instance
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의
// 인스턴스 인지 즉, 클래스를 사용해 만들어 졌는지 확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);