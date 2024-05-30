class add{

    constructor(name) {
        this.name = name;
    }
    add(a,b){
        console.log(a+b);
    }
}

class getFirstClassData extends add {
    constructor(name) {
        super(name);
    }

    add() {
        super.add(1,7)
    }
}



let res = new add("ani");
let res1 = new getFirstClassData();

res.add(1,2)
res1.add();
