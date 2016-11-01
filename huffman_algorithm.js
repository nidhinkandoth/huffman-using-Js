function frequency(str) {
	var freq = {}
	for(var i=0; i<str.length; i++) {
		if(freq[str[i]]) {
			freq[str[i]]++;

		} else {
			freq[str[i]]=1;
		}
	}
	return freq;
};



function sortFreq(freq) {
	letters = Object.keys(freq);
	freq_tuple=[];
	for(var i=0; i<letters.length; i++) {
		freq_tuple.unshift([freq[letters[i]],letters[i]]);
	}
	
	freq_tuple.sort();
	return freq_tuple;
};
var freq_tuple = sortFreq(frequency("aaabccdeeeeeffg"));
//console.log(freq_tuple);



function buildTree(freq_tuple) {
	//var len = freq_tuple.length;
	while((freq_tuple.length) > 1) {
		leastTwo = freq_tuple.slice(0,2);
		//console.log(leastTwo);	
		theRest = freq_tuple.slice(2);
		//console.log(theRest);
		combFreq = leastTwo[0][0] + leastTwo[1][0];
		//console.log(combFreq);
		theRest.push([combFreq, leastTwo]);
		freq_tuple = theRest;
		freq_tuple.sort();
		//console.log(sorted);
		}
	
	return freq_tuple[0];
	};

console.log(buildTree(freq_tuple));


function trimTree(tree) {
	var p = tree[1];
	if(typeof(p) == typeof('a')) {
		return p;
	} else {
		return [trimTree(p[0]), trimTree(p[1])];
	}
};


var tree = buildTree(freq_tuple);
console.log(tree);

console.log(trimTree(tree));
//console.log(trimTree(buildTree(sortFreq(frequency("aaabccdeeeeeffg")))));

