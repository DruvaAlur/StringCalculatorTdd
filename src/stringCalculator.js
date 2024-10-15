function add(numbers) {
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiter = parts[0].substring(2);
    const nums = parts[1].split(delimiter).map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }

  if (numbers === "") return 0;

  const nums = numbers.split(/[\n,]/).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
