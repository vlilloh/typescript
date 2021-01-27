import {
  expect,
} from '@esm-bundle/chai';

import {
  Array_,
} from '@vlilloh/array';

const isGreatherThanZero = (value: number): boolean => {
  return value > 0;
}

it(
  `constructor: new Array_() === new Array()`,
  () => {
    expect(new Array_(1, 2, 3)).to.not.deep.equal([1, 2, 3]);
    expect(String(new Array_(1, 2, 3))).to.deep.equal(String([1, 2, 3]));
  },
);

it(
  `[Symbol.iterator] and spread`,
  () => {
    expect([...[1, 2, 3]]).to.deep.equal([1, 2, 3]);
    expect(new Array_(...new Array_(1, 2, 3)))
      .to.deep.equal(new Array_(1, 2, 3));
  },
);

it(
  `[Symbol.iterator] and spread for concat`,
  () => {
    expect([...[1, 2, 3], ...[4, ...[5, 6]]])
      .to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(
      new Array_(
        ...new Array_(1, 2, 3),
        ...new Array_(4, ...new Array_(5, 6))
      )
    ).to.deep.equal(new Array_(1, 2, 3, 4, 5, 6));
  },
);

it(
  `concat`,
  () => {
    expect([1, 2, 3].concat(4, [5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    /* expect(new Array_(1, 2, 3).concat(4, new Array_(5, 6)))
      .toStrictEqual(new Array_(1, 2, 3, 4, 5, 6)); */
  },
);

it(
  `copyWithin`,
  () => {
    expect([1, 2, 3, 4, 5, 6, 7].copyWithin(1, 4, 6))
      .to.deep.equal([1, 5, 6, 4, 5, 6, 7]);
    expect(new Array_(1, 2, 3, 4, 5, 6, 7).copyWithin(1, 4, 6))
      .to.deep.equal(new Array_(1, 5, 6, 4, 5, 6, 7));
  },
);

it(
  `entries`,
  () => {
    expect([...[`x`, `y`].entries()]).to.deep.equal([[0, `x`], [1, `y`]]);
    expect(new Array_(...new Array_(`x`, `y`).entries()))
      .to.deep.equal(
        new Array_(
          new Array_<number|string>(0, `x`),
          new Array_<number|string>(1, `y`),
        )
      );
  },
);

it(
  `every`,
  () => {
    expect([1, 2, 3].every(isGreatherThanZero)).to.deep.equal(true);
    expect([1, -2, 3].every(isGreatherThanZero)).to.deep.equal(false);
    expect(new Array_(1, 2, 3).every(isGreatherThanZero)).to.deep.equal(true);
    expect(new Array_(1, -2, 3).every(isGreatherThanZero)).to.deep.equal(false);
  },
);

it(
  `fill`,
  () => {
    expect([1, 2, 3].fill(4)).to.deep.equal([4, 4, 4]);
    expect(new Array_(1, 2, 3).fill(4)).to.deep.equal(new Array_(4, 4, 4));
  },
);

it(
  `filter`,
  () => {
    expect([1, -2, 3].filter(isGreatherThanZero)).to.deep.equal([1, 3]);
    /* expect(new Array_(1, -2, 3).filter(isGreatherThanZero))
      .toStrictEqual(new Array_(1, 3)); */
  },
);

it(
  `find`,
  () => {
    expect([-1, 2, -3].find(isGreatherThanZero)).to.deep.equal(2);
    expect([-1, -2, -3].find(isGreatherThanZero)).to.deep.equal(undefined);
    expect(new Array_(-1, 2, -3).find(isGreatherThanZero)).to.deep.equal(2);
    expect(new Array_(-1, -2, -3).find(isGreatherThanZero)).to.deep.equal(undefined);
  },
);

it(
  `keys`,
  () => {
    expect([...[1, 2, 3].keys()]).to.deep.equal([0, 1, 2]);
    expect(new Array_(...new Array_(1, 2, 3).keys()))
      .to.deep.equal(new Array_(0, 1, 2));
  },
);

it(
  `toString`,
  () => {
    expect(String([1, 2, 3])).to.deep.equal(`1,2,3`);
    expect(String(new Array_(1, 2, 3))).to.deep.equal(`1,2,3`);
  },
);

it(
  `values`,
  () => {
    expect([...[1, 2, 3].values()]).to.deep.equal([1, 2, 3]);
    expect(new Array_(...new Array_(1, 2, 3).values()))
      .to.deep.equal(new Array_(1, 2, 3));
  },
);