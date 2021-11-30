let args = process.argv.slice(2);

const timer = function(args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log("ha");
      }, (args[i]*1000));
    }
  }
}

timer(args);

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, (args[i]));
// }

// don't have to add is a number condition because if you say args[i] is
// greater than 0, it is implicit you want a number value.

// GOOD:

// let args = process.argv.slice(2);

// const timer = function(args) {
//   for (let i = 0; i < args.length; i++) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//       console.log("ha");
//     }, (args[i]*1000));
//   }
// }

// timer(args);

