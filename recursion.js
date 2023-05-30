/** product: calculate the product of an array of numbers. */

function product(nums) {
	if (nums.length === 0) return 1;

	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	// base case: until 1 word is left, return words[0]
	// compare [0] to [1], take the smaller one

	if (words.length === 1) return words[0].length;
	if (words.length === 0) return 0;

	words[0].length > words[1].length
    ? words.splice(1, 1)
    : words.splice(0, 1);

	return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, keptLetters='') {
  if (str.length === 0) return '';
  if (i === str.length) return keptLetters;

  if (i % 2 === 0) keptLetters += str[i];

  i++;
  return everyOther(str, i, keptLetters);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
	//if arr is empty return false
	if (arr.length === 0) return false;
	//base case: if arr[0] === val return true
	if (arr[0] === val) return true;
	//if arr[0] !== val
	if (arr[0] !== val) {
		//splice off arr[0]
		arr.splice(0, 1);
	}
	//return recursive call
	return find(arr, val)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	//base case: if str.length is 0 or 1 return true
	if (str.length === 0 || str.length === 1 ) return true;
	//base case: if str[0] !== str[str.length -1] return false
	if (str[0] !== str[str.length -1]) return false;

	//create a new string variable
	let shorterStr = str;
	//if beg and end letters match
	if (str[0] === str[str.length - 1]) {
		//slice off first char and reassign
		shorterStr = shorterStr.slice(1);
		//slice off end char and reassign
		shorterStr = shorterStr.slice(- 1);
	}

	//call recursive case and pass in new string
	return isPalindrome(shorterStr);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
	product,
	longest,
	everyOther,
	find,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
	binarySearchIndex,
};
