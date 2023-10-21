const burguer = document.querySelector('.nav__burguer');
const navOverly = document.querySelector('.nav__overly');
let currentDropdown = navOverly;

burguer.addEventListener('click', () => {
  burguer.classList.toggle('nav__burguer__open');
  navOverly.classList.toggle('nav__overly__show');
})

navOverly.addEventListener('click', (e) => {
  e.preventDefault();
  const currentElement = e.target;
 // console.log(e.target.classList.value);
  if(isActive(currentElement, 'nav__parent')) {

    const subMenu = currentElement.parentElement.children[1];
    //console.log(subMenu);

    if(window.innerWidth < 768){
      let height = (subMenu.clientHeight == 0)
      ? subMenu.scrollHeight : 0;

      subMenu.style.height = `${height}px`;
      //console.log(height);
    } else {  
      if(!isActive(subMenu, 'nav__inner--show')) {
        closeDropdown(currentDropdown);
      }
      subMenu.classList.toggle('nav__inner--show');

      currentDropdown = subMenu;
    }

  }
})

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
  if(isActive(currentDropdown, 'nav__inner--show')) {
    closeDropdown.classList.remove('nav__inner--show');
  }
}

window.addEventListener('resize', () => {
  closeDropdown(currentDropdown);

  if(window.innerWidth > 768) {
  const navIn = document.querySelectorAll('.nav__inner');

  navIn.forEach(navIn => {
    navIn.style.height = '';
  
  })
}
})

