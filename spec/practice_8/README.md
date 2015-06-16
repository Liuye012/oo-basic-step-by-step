用原型的方式写一个Person类，要有name，age属性，要有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old.

再写一个Student类继承Person类，除了name，age属性，还有要有class属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

但是Student的class属性不是一个数字，而是一个对象，写一个Class类，有number属性。Student构造的时候把Class的一个实例传给Student，参见测试用例。

再写一个Teacher类继承Person类，除了name，age属性，也有class属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.


所有Person的子类的这段文字

My name is Tom. I am 21 years old.

都应该调用Person的introduce方法来获得