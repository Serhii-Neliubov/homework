class Student {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        this.markAttendance(true);
    }

    absent() {
        this.markAttendance(false);
    }

    markAttendance(isPresent) {
        const index = this.attendance.findIndex(element => element === undefined);

        if (index !== -1) {
            this.attendance[index] = isPresent;
        } else {
            console.log("Cannot mark attendance. Attendance record is full");
        }
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return Number((sum / this.grades.length).toFixed(1));
    }

    calculateAttendancePercentage() {
        const presentCount = this.attendance.filter(status => status === true).length;
        return presentCount / this.attendance.length;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendancePercentage = this.calculateAttendancePercentage();

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Well done!";
        } else if (averageGrade > 70 || attendancePercentage > 0.7) {
            return "Good, but it can be better";
        } else {
            return "Radish!";
        }
    }
}

const student1 = new Student("Alexey", 2000);

student1.addGrade(95);
student1.addGrade(85);
student1.addGrade(100);
student1.present();
student1.present();
student1.present();

console.log('Summary: ',student1.summary());
console.log('Age: ',student1.getAge());
console.log('Average Grade: ', student1.calculateAverageGrade());
console.log('Attendance Percentage: ', student1.calculateAttendancePercentage());

const student2 = new Student("Sergey", 2001);

student2.addGrade(85);
student2.addGrade(75);
student2.present();
student2.absent();
student2.present();

console.log('Summary: ',student2.summary());
console.log('Age: ',student2.getAge());
console.log('Average Grade: ', student2.calculateAverageGrade());
console.log('Attendance Percentage: ', student2.calculateAttendancePercentage());