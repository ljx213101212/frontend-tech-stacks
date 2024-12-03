function num_of_digits(num) {
	let ans = 0;
    //edge case
    if (num === 0) {
		return 1;
	}
	num = Math.abs(num);
    while (num > 0) {
		num = Math.floor(num / 10);
		ans += 1;
	}
	return ans;
}

console.log(num_of_digits(-2147483647));