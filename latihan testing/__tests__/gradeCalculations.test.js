const { averageExams, isStudentPassExam } = require("../gradeCalculations");

describe('grade calculations', () => {
   test('it should return exact average', () => {
      const listValueOfExams = [80, 100, 100, 80, 90];
      expect(averageExams(listValueOfExams)).toEqual(90);
   });

   test('it should return exam passed status', () => {
      const listValueOfExams = [100, 90, 85, 100, 95];
      expect(isStudentPassExam(listValueOfExams, 'Zidan')).toEqual(true);
   });

   test('it should return exam failed status', () => {
      const listValueOfExams = [55, 65, 73, 57, 60];
      expect(isStudentPassExam(listValueOfExams, 'Badrok')).toEqual(false);
   });
   
   test('it should handle non-number', () => {
      expect(() => {
         averageExams(listValueOfExams).toThrow();
      })
   });
});