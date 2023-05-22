
console.log('test');
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

const createFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('File created');
  });
};

createFile('hello.txt', 'Hello World');

console.log(fibonacci(5));
