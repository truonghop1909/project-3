// ViewerJS
new Viewer(document.querySelector('.section-2'));
// End ViewerJS

//Data Count
const listDataCount = document.querySelectorAll("[data-count]");
if(listDataCount.length > 0) {
    listDataCount.forEach(dataCount => {
        let number = dataCount.getAttribute("data-count");
        number = parseInt(number);
        let count = 0;
        let duration = 2500;
        let step = number / (duration / 100);
        const countUp = setInterval(() => {
            count += step;
            dataCount.innerHTML = Math.floor(count);
            if(count >= number) {
                dataCount.innerHTML = Math.floor(count);
                console.log(count);
                clearInterval(countUp);
            }
        }, 100);
    })
} 
//EndData Count 

// Khởi tạo AOS
    AOS.init();
// Hết Khởi tạo AOS


