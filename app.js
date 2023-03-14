const options = document.querySelectorAll(".option");
let sliderWrapper = document.querySelector(".sliderWrapper");
const numbers = document.querySelectorAll("#numbers");
const colors = document.querySelectorAll(".color");
const image = document.getElementById("img");
const head = document.getElementById("head");
const price = document.getElementById("price");
const close = document.querySelector(".cancel");
const payment = document.querySelector(".payment"); 
const open = document.getElementById("open");




const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];

options.forEach((option, index) => {
    option.addEventListener("click",()=>{
        sliderWrapper.style.transform = `translateX(-${100*(index)}vw)`;
        choosenProduct = products[index];
        head.innerText = choosenProduct.title;
        price.innerText = "$"+choosenProduct.price;
        colors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;

        })
        image.src = choosenProduct.colors[0].img;
        

    });
});

numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        numbers.forEach((number)=>{
            number.style.backgroundColor = "white";
            number.style.color = "black";
        });
        
        number.style.backgroundColor = "black";
        number.style.color = "white";
    });
});

colors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        image.src = choosenProduct.colors[index].img;

    }
    );
});

close.addEventListener("click",()=>{
    payment.style.display = "none";

})

open.addEventListener("click",()=>{
    payment.style.display = "block";
    close.style.position = "absolute";
    close.style.right = "2vw";
    close.style.top = "1w";
   

})