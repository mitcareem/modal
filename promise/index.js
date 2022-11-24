const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, ms);
  });

delay(3000).then((x) => console.log(x));
