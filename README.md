# coordMap
A hopefully performant approach to using arrays to represent and access data on points within a two-dimensional coordinate plane (i.e., a cartesian plane formed by the intersection of x-axis and y-axis).

Current Version: 0.0.4 (not ready for use, yet)

This helper utilizes a Proxy mechanism to allow an array-based grid to reference items within the grid array in the same way that you might use an index to reference an item in an array (e.g., `myArray[2]` The underlying way that items are refernced is built on top of the native reference by index method, so it should be much more performant than finding objects within an array by their properties).

## Current Restrictions

This helper library is still under active development and Version 1.0 has not yet been published, so there are a few restrictions based on what has been implemented up to this point.
* Only two-demensional coordinate planes are supported.
* Only even square grids are supported -- e.g., 3x3, 25x25, etc.
* Only grids of size 3 or greater are supported -- i.e., minimum grid is 3x3.
* Only grids of an odd size are supported (because the grid center position is clear with odd sizes).

To create a 2d coordinate plane:

```

myGrid = coordMap.create2d(3);

```

To access a location within the grid:

```

console.log(myGrid[0.0]);
// returns grid center location object
// e.g., { coords: { x: 0, y: 0 } }

console.log(myGrid[1.1]);
console.log(myGrid[-1.1]);
console.log(myGrid[1.-2]);
// returns other grid location based on coords provided

console.log(myGrid[6.1]);
console.log(myGrid[-4.7]);
console.log(myGrid[1.-2]);
// returns 'undefined' if location does not exist within grid

```

To set data within grid, use similar approach to getting locations:

```

myGrid[0.0].description = 'You stand in a clearing in a creepy forest';
console.log(myGrid[0.0])
// returns location object with new key
// {
//   coords: { x: 0, y: 0 },
//   description: 'You stand in a clearing in a creepy forest'
// }

```
