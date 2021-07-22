
const tabs = document.querySelectorAll(".tabs__header-item");
const tabsItems = document.querySelectorAll(".tabs__item");

// Индикатор табов
const indicator = document.querySelector('.tabs__indicator');

indicator.style.width = `${tabs[0].offsetWidth}px`
indicator.style.left = `${tabs[0].offsetLeft}px`

window.addEventListener("resize", () => {
    indicator.style.width = `${tabs[0].offsetWidth}px`
    indicator.style.left = `${tabs[0].offsetLeft}px`
  }, false);


// Переключение табов
tabs.forEach(function(item){
    item.addEventListener("click", function(e){

// Переключаение индикатора
    indicator.style.width = `${e.target.offsetWidth}px` 
    indicator.style.left = `${e.target.offsetLeft}px`

        const tabId = item.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if(!item.classList.contains("active")){

            tabs.forEach((item)=>{
                item.classList.remove("active");
            });
    
            tabsItems.forEach((item)=>{
                item.classList.remove("active");
            });
           
    
            item.classList.add("active");
            currentTab.classList.add("active");

        }
       

    });
});


// Изменение имени пользователя
const userName = document.getElementById('user-name');
const nameInput = document.querySelector('.name-input');

if ( localStorage.getItem('userName'))
{
userName.innerHTML = localStorage.getItem('userName');
}

userName.addEventListener('click',()=>{
    nameInput.style.display = 'block';
    userName.style.display = 'none';

    nameInput.focus();
    nameInput.value = userName.textContent;


    // Сохранение имени пользователя
    function saveUserName(){
        localStorage.setItem('userName',nameInput.value);
        userName.innerHTML = localStorage.getItem('userName');
        nameInput.style.display = 'none';
        userName.style.display = 'block';
    }

    // Обработка события снятие фокуса
    nameInput.addEventListener('blur',()=>{
        saveUserName();
    });

    // Обработка события нажатие клавиши enter
    nameInput.addEventListener('keydown',(e)=>{
        if (e.keyCode === 13){
            saveUserName();
        }
    });
})

