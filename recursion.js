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

function revString(str, reversedStr='', i=str.length-1) {
  if (reversedStr.length === str.length) return reversedStr;

  reversedStr += str[i];
  i--;
  return revString(str, reversedStr, i);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr[i] === val) return i;
  if (i >= arr.length) return -1;

  i++;
  return findIndex(arr, val, i);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  console.log('obj', obj, 'arr', arr);
  if (Object.values(obj).length === 0) return arr;

  for (const val of Object.values(obj)) {
    if (typeof val === 'string') {
      arr.push(val);
    } else {
      gatherStrings(val, arr);
    }
  }

	return arr;

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) { //arr= [3,4]
	//if arr is empty return false
	if (arr.length === 0) return false;
	//if val is less than arr[0] and greater than arr[arr.length -1] return false
	if (val < arr[0] || val > arr[arr.length -1]) return false;

	//get the midpoint
	let midpointIdx = Math.floor(arr.length / 2); //1
	// console.log("midpoint", midpointIdx, "arr[midpoint]", arr[midpointIdx])

	//base case: if midpoint is val return true
	if (arr[midpointIdx] === val) return true;
		//if val greater than midpoint and less than max
	if (val > arr[midpointIdx]) {
		//remove everything greater than midpoint
		arr = arr.slice(midpointIdx, arr.length)
		//if less than midpoint and greater than min
	} else {
		//remove everything less than midpoint
		arr = arr.slice(0, midpointIdx)
	}
	// console.log("AFTER:arr[midpoint]:", arr[midpointIdx], "arr", arr)
	return binarySearch(arr, val)

}

// [1, 2, 3, 4 ], 4

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	function _binarySearchIndex(arr, val, min, max, depth=0) {

		let mid = Math.floor(((max - min) / 2) + min);
		console.log('BEFORE:', ' -> '.repeat(depth), 'min', min, 'max', max, 'mid', mid, 'val', val, 'arr', arr);

		if (val < arr[min] || val > arr[max]) return -1;
		if (val === arr[mid]) return mid;

		if (val > arr[mid]) {
			min = mid;
		} else {
			max = mid;
		}
		console.log('AFTER:', ' -> '.repeat(depth), 'min', min, 'max', max, 'mid', mid, 'val', val, 'arr', arr);
		depth++;
		_binarySearchIndex(arr, val, min, max, depth);

	}

	_binarySearchIndex(arr, val, min, max);

}

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
