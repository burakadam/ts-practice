interface ICoordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: ICoordinate): ICoordinate;
function parseCoordinate(x: number, y: number): ICoordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): ICoordinate {
  let coord: ICoordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'object') coord = { ...(arg1 as ICoordinate) };
  else coord = { x: arg1 as number, y: arg2 as number };

  return coord;
}

console.log(parseCoordinate({ x: 12, y: 13 }));
console.log(parseCoordinate(13, 14));
