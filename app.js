const menu = [{
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "http://static.fooddrinkbuzz.com/i/2a/23/97b222ae37133ac2507b65c7b430.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://m.media-amazon.com/images/S/aplus-media/vc/e814ff3b-533d-4563-9474-60e80be182e7.__CR0,0,300,300_PT0_SX300_V1___.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://im0-tub-com.yandex.net/i?id=ca301fc125dac830c8e59253525f7c1f&n=13",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Kıymalı Pide",
    category: "Pide",
    price: 23.99,
    img: "https://cdn.yemeksepeti.com/productimages/TR_IZMIR/ora/orapasaport_kiymalipide_20190416130416_big.jpg",
    desc: `Biberli sarımsaklı kıyma`,
  },
];

// Category
const CategoryList = menu.map(
  (item) => {
    return item.category
  }
);

const UniqueCategoryList = ["All"].concat([...new Set(CategoryList)]);
console.log("Test: print category list\n\n", UniqueCategoryList);


// buttons
const ButtonsELEMENT = document.querySelector(".btn-container");
const CategoryButtons = UniqueCategoryList.map((category) => {
  return `<button type="button" class="btn-category btn btn-outline-dark col m-1" id="${category}" >${category}</button>`
}).join("")

ButtonsELEMENT.innerHTML = CategoryButtons;
console.log("Test print category butons\n\n", CategoryButtons)

// show menu
function showMenu(menu) {
  const menuHTML = menu.map((item) => {
    return `
    <div class="col-xs-12 col-md-6 mb-4">
      <div class="row">

        <div class="image col-4 ">
          <img src="${item.img}" class="photo img-fluid border border-3 border-dark rounded"
            alt="${item.title}">
        </div>

        <div class="text col-8">

          <div class="menu-title">
            <h4 >${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>

          <p class="menu-text">${item.desc}</p>
        </div>

      </div>
    </div>
    `
  }).join("");

  const menuELEMENT = document.querySelector(".section-center");
  menuELEMENT.innerHTML = menuHTML;
}

showMenu(menu)

// filter menu
const filterBUTTONS = document.querySelectorAll(".btn-category");

filterBUTTONS.forEach(button => {
  button.addEventListener("click", (e) => {
    const categoryBUTTON = e.currentTarget.id;
    
    const menuAfterClick = menu.filter(item => {
      if(item.category === categoryBUTTON)
        return item;
    })

    if(categoryBUTTON === "All")
      showMenu(menu)
    else
      showMenu(menuAfterClick)
  })
})
