
function getMax(...nums){

    let maxi = -Infinity ;

    for( let val of nums){
        maxi = Math.max(maxi , val) ;
    }

    return maxi ;

}



