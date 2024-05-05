interface Dog {
  bark: boolean;
  purr?: boolean;
}

let cat = { purr: true };

let dog = cat as Dog;
