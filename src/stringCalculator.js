function escapeRegexCharacters(delimiter) {
  return delimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&");
}

function add(numbers) {
  const negatives = [];

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterSection = parts[0].substring(2);

    const delimiters = delimiterSection
      .split("][")
      .map((d) => d.replace(/[\[\]]/g, ""));
    const escapedDelimiters = delimiters.map(escapeRegexCharacters);
    const regexDelimiter = escapedDelimiters.join("|");

    const nums = parts[1].split(new RegExp(regexDelimiter)).map(Number);

    nums.forEach((num) => {
      if (num < 0) negatives.push(num);
      if (num > 1000) return;
    });

    if (negatives.length > 0)
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);

    return nums.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
  }

  if (numbers === "") return 0;

  const nums = numbers.split(/[\n,]/).map(Number);

  nums.forEach((num) => {
    if (num < 0) negatives.push(num);
  });

  if (negatives.length > 0)
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);

  return nums.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}
module.exports = { add };
