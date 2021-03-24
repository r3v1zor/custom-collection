import {CustomCollection} from "./CustomCollection.js";

const collection = new CustomCollection();

class ValueType1 {
    constructor(value1, value2) {
        this.field1 = value1
        this.field2 = value2
    }
}

class ValueType2 {
    constructor(value1, value2, value3) {
        this.field1 = value1
        this.field2 = value2
        this.field3 = value3
    }
}

let id1 = collection.add(String("stringElem1"));
let id2 = collection.add(new ValueType1("value1", "item1"));
let id3 = collection.add(new ValueType1("value1", "item2"));
let id4 = collection.add(new ValueType2("value2", "item1", "field3"));
let id5 = collection.add(new ValueType2("value2", "item2", "field3"));

console.log("Get element by id")
let elementById = collection.getById(id1);
console.log("Item: { id:" + id1 + ", value: " + JSON.stringify(elementById) + "}")

elementById = collection.getById(id2);
console.log("Item: { id:" + id2 + ", value: " + JSON.stringify(elementById) + "}")

elementById = collection.getById(id4);
console.log("Item: { id:" + id4 + ", value: " + JSON.stringify(elementById) + "}")

console.log("Delete element by id: ")
console.log("All elements: ", collection.getAll())
let deleteById = collection.deleteById(id3);
console.log(deleteById)
console.log("All elements: ", collection.getAll())
collection.getById(id3) // error
deleteById = collection.deleteById(id3);
console.log(deleteById)
console.log("All elements: ", collection.getAll())

console.log("Replace by id: ")
let replaceById = collection.replaceById(id3, String("ERROR"))
console.log(replaceById)
replaceById = collection.replaceById(id5, String("SUCCESS"));
console.log(replaceById)
console.log("All elements: ", collection.getAll())

console.log("Update by id: ")
let updateById = collection.updateById(id2, new ValueType2("field1", "field2", "field3"));
console.log(updateById)
updateById = collection.updateById(id3, new ValueType1("newField1!", "newField2!"));
console.log(updateById)
updateById = collection.updateById(id2, new ValueType1("newField1", "newField2"));
console.log(updateById)
console.log("All elements: ", collection.getAll())
