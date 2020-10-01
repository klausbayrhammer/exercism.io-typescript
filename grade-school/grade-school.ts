type Grade = string;
type Student = string;
type Students = Student[];
type StudentRoster = Map<Grade, Students>

export default class GradeSchool {

    private roster = new Map<Grade, Students>();

    studentRoster(): StudentRoster {
        const immutableMap = new Map();
        for(const key of this.roster.keys()) {
            immutableMap.set(key, [... this.roster.get(key) ?? []])
        }
        return immutableMap;

    }

    addStudent(student: Student, grade: Grade) {
        const gradeKey = grade.toString();
        const studensInGrade = this.roster.get(gradeKey) ?? [];
        this.roster.set(gradeKey, [... studensInGrade, student].sort());
    }

    studentsInGrade(grade: Grade) {
        return [... this.roster.get(grade.toString()) ?? []];
    }
}