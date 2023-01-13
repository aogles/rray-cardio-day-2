//#1

//.some will check if one thing in array has what youre looking for

const adultAge = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});
console.log(adultAge);


//#2  can use same function but ith .every to check every person in array
const adultAge = people.every(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});
console.log(adultAge);

//answer would be false because every person is not 19

//#3

const commentId = comments.find(function(commentid){ //first blind attempt
    if (commentId.id === 823423); //refactor forgot '{}' on this line 
    return true;

});
console.log(commentId);

//#4
  // you can use the same function as above to find the comment line just use .findindex

  const commentIndex = comments.findindex(function(commentid){ 
    if (commentId.id === 823423); {
console.log(commentIndex); //this will retrive the comment index line 

comments.splice(index, 1); // this will removed the comment .splice
    
    };

});

