// Test satu segmen
// test("dua tambah dua adalah empat", () => {
//    expect(2+2).toBe(4);
// });

// Test grouping segmen
describe('Pengujian olah aritmatika', () => {
   test('#1 dua tambah dua adalah empat', () => {
      expect(2+2).toBe(4);
   });
   test('#2 dua kali tiga adalah enam', () => {
      expect(2*3).toBe(6);
   });
});