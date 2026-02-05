class Product {
    constructor(name, price, caloriesPer100g, weight){
        this.name = name
        this.price = price
        this.caloriesPer100g = caloriesPer100g
        this.weight = weight
    }
    info(){
        console.log("ц" + "е" + " " + "є" + ":" + " " + this.name)
    }
    showPrice(){
        console.log("Й" + "о" + "г" + "о" + " " + "ц" + "і" + "н" + "а" + ":" + " " + this.price)
    }
    showCalories(){
        console.log("у" + " " + "н" + "ь" + "о" + "г" + "о" + ":" + " " + this.caloriesPer100g + " " + "к" + "а" + "л" + "о" + "р" + "і" + "й" + ".")
    }
}
class Vegatable extends Product{
    constructor(name, price, caloriesPer100g, weight,){
        super(name, price, caloriesPer100g, weight)
    }
}
class Fruit extends Product{
    constructor(name, price, caloriesPer100g, weight, vitaminCContent){
        super(name, price, caloriesPer100g, weight)
        this.vitaminCContent = vitaminCContent
    }
}
class DairyProduct extends Product{
    constructor(name, price, caloriesPer100g, weight, fatContent){
        super(name, price, caloriesPer100g, weight)
        this.fatContent = fatContent
    }
}

let a = new Vegatable("плутоній", "400000$", "41", "100 грамм")
let b = new Fruit("уран 235", "3 000 000 000$", "20 000 000 000", "100 грамм", "0")
let c = new DairyProduct("апельсин", "700 000 000 000 000 000 000 000 000 000$", "40", "100 грамм", "0.1")

let d = [
    a, b, c
]
a.Vegatable()
b.Fruit()
c.DairyProduct()
