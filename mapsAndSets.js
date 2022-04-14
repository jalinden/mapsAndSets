//1.
[1,2,3,4]

//2.
"ref"

//3.
0: {Array(3) => true}
1: {Array(3) => false}

//4.
const hasDuplicate = (arr) => {
    if(new Set(arr).size !== arr.length){

        return true 
    }  
    return false 
}

//5.
function vowelCount(str) {
    let vowels = 'aeiou';
    let vowelMap = new Map();
    for(let char of str){
        let lowerChar = char.toLowerCase();
        if(vowels.includes(lowerChar)){
            if(vowelMap.has(lowerChar)){
                vowelMap.set(lowerChar,vowelMap.get(lowerChar) + 1)
            }
            else{ vowelMap.set(lowerChar, 1)}
        }
    }
    return vowelMap;
}