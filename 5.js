class Samsung{
    constructor(){
        this.model = 'A50'
        this.year = 2019
        this.color = 'black'
        this.mem = 64
        this.brand = 'Samsung'
    }
}

class OnePlus{
    constructor(){
        this.model = 'Note 8 pro'
        this.year = 2020
        this.color = 'blue'
        this.mem = 126
        this.brand = 'OnePlus'
    }
}

class Huawei{
    constructor(){
        this.model = 'P30 pro'
        this.year = 2020
        this.color = 'white'
        this.mem = 128
        this.brand = 'Huawei'
    }
}

console.log(new Samsung)
console.log(new OnePlus)
console.log(new Huawei)

//2 завдання:

class Samsung{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Samsung';
    }
}

class OnePlus{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'OnePlus';
    }
}

class Huawei{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Huawei';
    }
}

console.log(new Samsung('A50',2019,'black',64))
console.log(new OnePlus('Note 8 pro',2020,'white',126))
console.log(new Huawei('P30 Pro',2020,'white',128))

//3 завдання:

class Phone{
    constructor(model, year, color, mem){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }
}

class Samsung extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Iphone';
    }
}

class OnePlus extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Xiaomi';
    }
}

class Huawei extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Samsung';
    }
}

console.log(new Samsung('A50',2019,'black',64))
console.log(new OnePlus('Note 8 pro',2020,'white',126))
console.log(new Huawei('P30 Pro',2020,'white',128))

//4 завдання:

class Phone{
    constructor(model, year, color, mem) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }

    calculatePrice = () => {
        let koef = 1.12 
        return Math. round(((this.mem * koef)/ (YearNow - this.year)) * 10);
    }

    calculateYear = () => {
        return(YearNow - this.year)
    }

}

class Samsung extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Samsung';
    }
}

class OnePlus extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'OnePlus';
    }
}

class Huawei extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Huawei';
    }
}

var YearNow = 2022

let samsung = new Samsung('A50',2019,'black',64)
let oneplus = new OnePlus('Note 8 pro',2020,'white',126)
let huawei = new Huawei('P30 Pro',2020,'white',128)

console.log('Телефону ' + samsung.calculateYear() + ' р');
console.log('Ціна телефона - '+ samsung.calculatePrice() + ' $');

console.log('Телефону '+ oneplus.calculateYear() + ' р');
console.log('Ціна телефона - ' + oneplus.calculatePrice() + ' $');

console.log('Телефону '+ huawei.calculateYear() + ' р') ;
console.log('Ціна телефона - '+ huawei.calculatePrice() + ' $');