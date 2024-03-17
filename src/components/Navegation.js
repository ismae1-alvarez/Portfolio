    let w = document.documentElement.clientWidth || window.innerWidth;
    const menuButton = document.getElementById('menu-button');
    const menuList = document.getElementById('menu-list');
    const animationText = document.getElementById('write-text');
    let menuOpen = false;

    // If Cahange Width Menu
    window.addEventListener('resize',()=>{
        w = document.documentElement.clientWidth || window.innerWidth;
        if(w >= 767) {
            menuButton.style.display = 'block'
            menuList.style.display = 'none'
            menuOpen =false
            return
        }
    });
    // Open Menu
    menuButton.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            menuList.style.display = 'block'
            return;
            
        };
        menuList.style.display = 'none';
    });




    // Animation Text
    let text = 'Web Develop Full-Stack';
    let index = 0;
    let maxIterations = 10;
    
    function writeText() {
        if (index < text.length && maxIterations > 0) {
            animationText.textContent += text.charAt(index);
            index++;
            setTimeout(writeText, 400);
        } else if (maxIterations > 0) {
            maxIterations--;
            deleteText();
        }
    }
    
    function deleteText() {
        if (index >= 0 && maxIterations > 0) {
            animationText.textContent = animationText.textContent.slice(0, index - 1);
            index--;
            setTimeout(deleteText, 400);
        } else if (maxIterations > 0) {
            maxIterations--;
            index = 0;
            writeText();
        }
    }
    
    writeText();





    // // Examples
    // let names = "HELLO WORLD";
    // let  value = 0;
    // let textValues = [];

    // function examples() {
    //     if(value < names.length){
    //         textValues.push(names.charAt(value));
    //         value++
    //         console.log(textValues)
    //         setTimeout(examples, 100);
    //         return
    //     }    
    //     deleteElement()
    // }

    // function deleteElement(){
    //     if(value > 0){
    //         console.log('Se cumple los valores');
    //         textValues.pop(names.charAt(value));
    //         value--
    //         setTimeout(deleteElement, 100);
    //         console.log(textValues)
    //         console.log(value)
    //         console.log(names.length)
    //         return
    //     }
    // }

    // examples()