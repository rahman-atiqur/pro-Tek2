// let counter = document.querySelector('.counter');
// // counter.innerText='1000';
// let count = 1;

// setInterval(() => {
//     if (count < 75) {
//         count++;
//         counter.innerText = count;
//     }
// }, 1);
let counters = document.querySelectorAll('.counter');
let time = 300;
counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data_target'); //+ used for converting number
        let count = counter.innerText;

        let increment = target / time;
        setInterval(()=>{
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        },1000);
    };

    updateCount();
});

let healthCondition = document.querySelector('.health');
setTimeout(() => {
    healthCondition.innerText = 'You are Fit';
}, 2000);
