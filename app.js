//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating:{
       type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

/* const fruit = new Fruit ({
    name: "Apple",
    rating: 6,
    review: "Pretty solid as a fruit."
}); */

const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "Peaches are so yummi!"
})
//fruit.save()


const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Grate fruit!"
})

//pineapple.save();

const lemon = new Fruit({
    name: "Lemon",
    score: 5,
    review: "Sourrr!"
})

//lemon.save();

const person = new Person ({
    name: "Amy",
    age: 15,
    favouriteFruit: pineapple
})

/* const person = new Person ({
    name: "John",
    age: 37,
    favouriteFruit: lemon
}); */
person.save()

/* Person.deleteOne({_id: "6377afe9fb76a2a621b20f75"}, function(err){
    if (err) {
        console.log(err)
    } else {
        console.log("Deleted")
    }
}) */

/* Fruit.deleteOne({name: "Peach"},function(err){
    if (err){
        console.log(err)
    } else {
        console.log("Succesfully deleted the document")
    }
} ) */

//person.save();

/* const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
})

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
})

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "Nice too"
}); */

/* Fruit.insertMany([kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Succesfully save all the fruits to fruitsDB")
    }
}); */

/* Person.deleteMany({name: "John"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Deleted")
    }
})
 */
Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);        
    } else {
        /* for (i=0; i<fruits.length; i++) {
            console.log(fruits[i].name)
        } */
        mongoose.connection.close();
       fruits.forEach(function(fruit){
        console.log(fruit.name)
       })
    }
});
