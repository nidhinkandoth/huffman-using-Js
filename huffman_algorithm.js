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

//console.log(buildTree(freq_tuple));


function trimTree(tree) {
	var p = tree[1];
	if(typeof(p) == typeof('')) {
		return p;
	} else {
		return [trimTree(p[0]), trimTree(p[1])];
	}
};


//console.log(tree);

//console.log(trimTree(tree));

pat='';
codes = {};
function assignCodes(node, pat) {
    if(typeof(node) == typeof("")) {
         codes[node] = pat;       
	}         
    else{                               
        assignCodes(node[0], pat+"0");    
        assignCodes(node[1], pat+"1"); 
	}
    return codes;
};


//console.log(assignCodes(tree,pat));

//ENCODE function

function encode(str) {
	output='';
	for(i=0; i<str.length; i++){
		output+=codes[str[i]];
	return output;
	}
};

//DECODE function

function decode(tree, str){
	output='';
	p = tree;
	for(i=0; i<str.length; i++){
		if(str[i] == 0){
			p=p[0];
		}
		else{
			p=p[1];
		}
	if(typeof(p) == typeof('')){
		output+=p;
		p= tree;
	}
	}
	return output;
};


var freq_tuple = sortFreq(frequency("aaabccdeeeeeffg"));
var tree = buildTree(freq_tuple);
var tree = trimTree(tree);
var assign = assignCodes(tree,pat);
var encoded_data = encode("aaabccdeeeeeffg");
console.log(encoded_data);






















