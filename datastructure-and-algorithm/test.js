
const obj = {
    param1: "a",
    func1: () => {
        console.log(this);
    },
    func2: function () {
        console.log(this);
    }
}

obj.func1();
obj.func2();
