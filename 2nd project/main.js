let slidersImage= document.querySelectorAll("img");
let nextBtn= document.querySelector(".next");
let prevBtn= document.querySelector(".prev");
let indicator= document.querySelectorAll(".dot");

//first image
let counter=0;

nextBtn.addEventListener("click", slidersNext)
function slidersNext(){
    slidersImage[counter].style.animation="next1 0.5s ease-in forwards";
    if(counter>=slidersImage.length -1){
        counter=0
    }else{
        counter++;
    }
    slidersImage[counter].style.animation="next2 0.5s ease-in forwards";
}



prevBtn.addEventListener("click", slidersPrev)
function slidersPrev(){
slidersImage[counter].style.animation="prev1 0.5s ease-in forwards";
if(counter=== 0){
    counter = slidersImage.length -1;
}else{
    counter--;
}
slidersImage[counter].style.animation= "prev2 0.5s ease-in forwards";
}

function autoImageSlide(){
    ImageSlider = setInterval(slidersNext, 1000);
}
autoImageSlide();

const container = document.querySelector(".container")
container. addEventListener("mouseover",()=>{
    clearInterval(ImageSlider)
})

container. addEventListener("mouseout", autoImageSlide);


function updateIndicator() {
    indicator.forEach((dot, index) => {
        dot.classList.remove("active")
        if (counter === index) {
            dot.classList.add("active")
        }
    })
}

indicator.forEach((dot => {
    dot.addEventListener("click", ()=> {
        indicator.forEach((dot)=> dot.classList.remove("active"));
        dot.classList.add("active");

        let ImageId = parseInt(dot.getAttribute("attr"), 10)
        
        if(ImageId > counter){
            slidersImage[counter].style.animation= "next1 0.5s ease-in forwards";

            counter = ImageId

            slidersImage[counter].style.animation= "next2 0.5s ease-in forwards";
        }else if(counter > ImageId){
            slidersImage[counter].style.animation = "prev1 0.5s ease-in forwards";

            counter = ImageId

            slidersImage[counter].style.animation= "prev2 0.5s ease-in forwards";
        }
    })
    updateIndicator()
}))
