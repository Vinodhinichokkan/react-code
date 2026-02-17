function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(res => {
          results[index] = res;
          count++;

          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// example usage
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
myPromiseAll([p1, p2, p3]).then(console.log); // output: [1, 2, 3]

