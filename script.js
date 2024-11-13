function Student(name, lastname, year) {
    this.name = name;
    this.lastname = lastname;
    this.year = year;
    this.ratings = [];

    this.attendance = [];
    this.currentIndex = 0;

    
    this.getAge = function() {
        const thisYear = new Date().getFullYear();
        return thisYear - this.year;
    }

    this.addRate = function(grade) {
        this.ratings.push(grade);
        
    }

    this.averageRate = function(){
        const sum = this.ratings.reduce(function (add, rate){
            return add + rate;
        }, 0)

        return sum / this.ratings.length;
    }
    this.averageAttendance = function(){
        const presentDays = this.attendance.filter(function(day){
            return day === true;
        })
        return presentDays.length / this.attendance.length;
    }


    this.present = function(){
        if(this.attendance.length < 25){
            this.attendance[this.currentIndex++] = true;
                
        }
    }
    this.absent = function(){
        if(this.attendance.length < 25){
            this.attendance[this.currentIndex++] = false;
        }

    }


    this.summary = function(){
        const averageRate = this.averageRate();
        const averageAttendance = this.averageAttendance();

        if (averageRate > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageRate > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

};
  //Student 1
  const student1 = new Student("Pavlo", "Andromeda", 1998);

  console.log(student1.name, student1.lastname);
  console.log(student1.getAge());

  student1.addRate(100);
  student1.addRate(15);
  student1.addRate(20);
  student1.addRate(30);
  student1.addRate(50);
  student1.addRate(10);
  console.log(student1.averageRate());

  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.absent();
  student1.present();
  console.log(student1.summary());
 

  //Student 2
  const student2 = new Student("Ivan", "Ivakno", 2002);

  console.log('');
  console.log(student2.name, student2.lastname);

  console.log(student2.getAge());

  student2.addRate(100);
  student2.addRate(20);
  student2.addRate(95);
  student2.addRate(90);
  student2.addRate(30);
  student2.addRate(90);
  console.log(student2.averageRate());

  student2.present();
  student2.present();
  student2.present();
  student2.present();
  student2.present();
  student2.present();
  student2.present();
  student2.absent();
  student2.absent();
  student2.absent();
  student2.absent();
  student2.absent();
  console.log(student2.summary());
  

   //Student 3
   const student3 = new Student("Anya", "Doroshenko", 2018);

   console.log('');
   console.log(student3.name, student3.lastname);
   
   console.log(student3.getAge());
 
   student3.addRate(100);
   student3.addRate(100);
   student3.addRate(100);
   student3.addRate(100);
   student3.addRate(100);
   student3.addRate(100);
   console.log(student3.averageRate());
 
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   student3.present();
   console.log(student3.summary());
   
   
  
  
 