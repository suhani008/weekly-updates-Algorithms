function invertedStar(n){
    for (let i =n;i>=1;i--){
        let star= "";
        for(j = 1; j<=i;j++){
            star +="*";
        };
        console.log(star);
    };
}

invertedStar(6);