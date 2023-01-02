let main = () => {
    let choose = ['سنگ', 'کاغذ', 'قیچی'];
    let userScore = 0;
    let computerScore = 0;
    while(true) {
        let userChoose = prompt("لطفا انتخاب خود را وارد کنید:");
        if(userChoose === 'پایان') {
            alert('روز خوبی داشته باشی')
            break;
        }
        if(choose.includes(userChoose)) {
            const randomNumber = Math.floor(Math.random() * choose.length);
            const computerChoose = choose[randomNumber];
            if(userChoose === computerChoose) {
                showScore(userScore, computerScore, `هیچکدام`, userChoose, computerChoose);
                continue;
            }
            if( (userChoose === 'سنگ' && computerChoose === 'قیچی' ) ||
                 userChoose === 'کاغذ' && computerChoose === 'سنگ'  ||
                 userChoose === 'قیچی' && computerChoose === 'کاغذ' )
                showScore(++userScore, computerScore, `شما` , userChoose, computerChoose);
            else
                showScore(userScore, ++computerScore, `کامپیوتر` , userChoose, computerChoose);
        }
    }
}

let showScore = (userScore, computerScore, winner, userChoose, computerChoose) => {
    alert(`شما${userChoose} , کامپیوتر ${computerChoose} , برنده ${winner} , امتیاز شما ${userScore} , امتیاز کامپیوتر ${computerScore}`)
}