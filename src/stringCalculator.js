function escapeRegexCharacters(delimiter) {
  return delimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&");
}
function checkForNegativeNums(nums) {
  const negatives = [];
  nums.forEach((num) => {
    if (num < 0) negatives.push(num);
  });

  if (negatives.length > 0)
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
}

function add(numbers) {
  if (numbers === "") return 0;

  let delimiterPattern = "\n|,";
  let nums = numbers.split(new RegExp(delimiterPattern)).map(Number);

  if (numbers.startsWith("//")) {
    ({ delimiterPattern, nums } = getDelimiter(
      numbers,
      delimiterPattern,
      nums
    ));
  }
  checkForNegativeNums(nums);
  return nums.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}

function getDelimiter(numbers, delimiterPattern, nums) {
  const parts = numbers.split("\n");
  const delimiterSection = parts[0].substring(2);

  const delimiters = delimiterSection
    .split("][")
    .map((d) => d.replace(/[\[\]]/g, ""));
  const escapedDelimiters = delimiters.map(escapeRegexCharacters);
  delimiterPattern = escapedDelimiters.join("|");

  nums = parts[1].split(new RegExp(delimiterPattern)).map(Number);
  return { delimiterPattern, nums };
}

module.exports = { add };
