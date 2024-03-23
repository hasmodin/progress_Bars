let runBtn = document.querySelector('button');
let myBar = document.querySelector('.mybar');

const barLoad = () => {
    runBtn.addEventListener('click', () => {
        console.log('button was clicked');
        let intervalId = 0;
        if(intervalId == 0) {
            intervalId = 1;
            width = 1;

            const frame = () => {
                if(width >= 100) {
                    clearInterval(id);
                    i = 0;
    
                }else {
                    width++;
                    myBar.style.width = width + '%';
                }
            }
            let id = setInterval(frame, 10);
            
            
            
            
       
        }
    });
}
barLoad();

