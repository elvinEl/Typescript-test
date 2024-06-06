// union types
let mix: string | number = 12;

// literal types
let names: "Elvin" | "Elnur" | "Tohid" = "Elnur";

// array types
const persons: (string | number)[] = ["Elvin", "Elnur", "Tohid", 3];

// interface types
interface MyProps {
  name: string;
  age?: number;
}

const obj: MyProps = {
  name: "Elvin ",
  age: 25,
};

let array: MyProps[] = [
  {
    name: "Elvin",
  },
  {
    name: "Sahil",
    age: 34,
  },
];

// tuple
const workers: [string, string, string, number] = [
  "Elvin",
  "Elnur",
  "Tohid",
  12,
];
// functions

// function add(a: number, b: number) {
//   return a + b;
// }

interface numbers {
  a: number;
  b: number;
}
function add({ a, b }: numbers) {
  return a + b;
}

// generic types
interface Arr<T, U> {
  name: T;
  age?: U;
}

let arr: Arr<string, number>[] = [
  {
    name: "Test",
    age: 25,
  },
];
let arr2: Arr<number, number>[] = [
  {
    name: 100,
    age: 35,
  },
];
let arr3: Arr<boolean, number>[] = [
  {
    name: true,
  },
];

// key of
type Test = {
  a: string;
  b: string;
  c: string;
};
type Test2 = keyof Test;

// mapped types
type User = {
  id: number;
  name: string;
  email: string;
};
type PartialUser = {
  [P in keyof User]?: User[P];
};
const Elvin: PartialUser = {
  id: 1,
};

// extending types

interface Properties {
  id: number;
  name: string;
  bio: string;
}
interface Properties2 extends Properties {
  color: string;
}
let object: Properties2 = {
  id: 1,
  name: "Elvin",
  bio: "test",
  color: "lime",
};

//utility types

interface Employee {
  name: string;
  age: number;
}

const test: Partial<Employee> = {
  name: "Elvin",
};
//Butun ozelliklerinden istifade etmesede olar "Partial"
const test2: Required<Employee> = {
  name: "Elvin",
  age: 25,
};
//Butun ozelliklerinden mecbnuri istifade etmelidi "Required"
const test3: Readonly<Employee> = {
  name: "Elvin",
  age: 25,
};
//Object icinde olan deyerleri deyismek olmur
const test4: Pick<Employee, "name"> = {
  name: "Elvin",
  //   age: 25,
};
//Interface icinden istediyimiz xüsussiyəti secerek istifade ede bilerik
const test5: Omit<Employee, "age"> = {
  name: "Elvin",
//   age: 25,
};
//Interface icinden istifade etmek istemediyimiz xüsusiyyəti seçərək istifadədən çıxara bilərik
