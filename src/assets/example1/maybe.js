export class Maybe {
  constructor(x) {
    this.$value = x;
  }

  static fromNullable(x) {
    if (x === undefined || x === null) {
      return new Nothing();
    }
    return new Just(x);
  }
}

export class Nothing extends Maybe {
  fold(onNothing, onJust) {
    return onNothing();
  }
}

export class Just extends Maybe {
  fold(onNothing, onJust) {
    return onJust(this.$value);
  }
}
