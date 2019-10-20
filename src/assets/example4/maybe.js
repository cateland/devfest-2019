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

  map(transform) {
    return this;
  }

  apply(maybe) {
    return this;
  }

  chain(func) {
    return this;
  }
}

export class Just extends Maybe {
  fold(onNothing, onJust) {
    return onJust(this.$value);
  }

  map(transform) {
    return new Just(transform(this.$value));
  }

  apply(maybe) {
    return maybe.map(this.$value);
  }

  chain(func) {
    return func(this.$value);
  }
}
