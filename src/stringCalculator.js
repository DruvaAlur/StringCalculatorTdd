function add(numbers) {
  const negatives = [];

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiter = parts[0].substring(2);
    const nums = parts[1].split(delimiter).map(Number);

    nums.forEach((num) => {
      if (num < 0) negatives.push(num);
    });

    if (negatives.length > 0)
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);

    return nums.reduce((sum, num) => sum + num, 0);
  }

  if (numbers === "") return 0;

  const nums = numbers.split(/[\n,]/).map(Number);

  nums.forEach((num) => {
    if (num < 0) negatives.push(num);
  });

  if (negatives.length > 0)
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);

  return nums.reduce((sum, num) => sum + num, 0);
}
module.exports = { add };
