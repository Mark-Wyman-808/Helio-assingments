class Animal {
    constructor (){
        }
       sayName(){
           console.log(this._name)
       } 
       speak(){
           console.log(this._sound)
       }
       get name(){
           return this._name}
        set name(newValue) 
        {this._name = newValue}
       }
    

class Dog extends Animal{
    constructor(name, sound){
        super()
        this.name = name
        this.sound = sound
    }
        
}


let myDog = new Dog ("mal", "bark")
console.log(myDog)
console.log(this.sound)