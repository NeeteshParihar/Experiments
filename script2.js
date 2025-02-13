
function getMax(...nums){

    let maxi = -Infinity ;

    for( let val of nums){
        maxi = Math.max(maxi , val) ;
    }

    return maxi ;

}

function getMin(...nums){
    let mini = Infinity ;
    for( let val of nums){
      if(val < mini)
            mini = val ;
    }
    return mini ;
}

console.log(getMax(1 ,2,3,4,5))



