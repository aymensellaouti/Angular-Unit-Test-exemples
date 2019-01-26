export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  path: string;
  age: number;
  cin: number;
  constructor(id: number= null,
              cin: number,
              name: string= 'fakeName',
              firstname: string= 'fakeFirst',
              job: string= 'Nothing',
              path: string= 'Nothing',
              age: number= 100) {
    this.id = id;
    this.name = name;
    this.cin = cin;
    this.firstname = firstname;
    this.job = job;
    this.age = age;
    this.path = path;
  }
}
