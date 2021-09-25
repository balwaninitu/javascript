//reference to div in html file
const clock = document.querySelector('.clock');


//function get time from clock in every second
const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    console.log(h, m,s);

    //output clock to DOM

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};

//calling tick function every second
setInterval(tick, 1000);
