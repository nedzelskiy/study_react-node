import { IncomingMessage, ServerResponse } from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end('not found');
};

export class Foo {
  foo: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  test() {
    console.log(this.foo);
  }
}
