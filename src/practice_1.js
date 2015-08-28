function Person(name,age){
  this.name=name;
  this.age=age;
}

Person.prototype.introduce= function () {
  var string='My name is '+this.name+'.'+' I am '+ this.age+' years old.';
  return string;
}
module.exports=Person;