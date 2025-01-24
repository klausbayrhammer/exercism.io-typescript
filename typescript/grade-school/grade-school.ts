type Grade = string;
type Student = string;
type Students = Student[];
type StudentRoster = Map<Grade, Students>

export default class GradeSchool {

    private roster = new Map<Grade, Students>();

    studentRoster(): StudentRoster {
        const rosterCopy = new Map();
        this.roster.forEach((val, key) => rosterCopy.set(key, [... val]))
        return rosterCopy;
    }

    addStudent(student: Student, grade: Grade) {
        const newStudentsInGrade = [... this.studentsInGrade(grade), student];
        this.roster.set(String(grade), newStudentsInGrade.sort());
    }

    studentsInGrade(grade: Grade) {
        return [... this.roster.get(grade.toString()) ?? []];
    }
}