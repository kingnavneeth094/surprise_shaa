document.querySelectorAll(".icon")[0].addEventListener("click",function(){
    var audi1 = new Audio("audio/1698206595574kxatmeuf-voicemaker.in-speech.mp3");
    audi1.play();
})
document.querySelectorAll(".icon")[1].addEventListener("click",function(){
    var audi2 = new Audio("audio/1698206816694e2d55ao9-voicemaker.in-speech.mp3");
    audi2.play();
})
for (var i = 0; i < 3; i++) {
    document.querySelectorAll("li")[i].addEventListener("dblclick",function(){
        var ins = this.innerHTML;
        switch(ins){
            case "9.8":
                setTimeout(() => {
                    this.innerHTML= "(❁´◡`❁)";
                },"10");
                break;
            case "9.55":
                setTimeout(() => {
                    this.innerHTML = "Our sharu is 🔥";
                    
                }, "10");
            case "9.68":
                setTimeout(() => {
                    this.innerHTML = "I believe in us!!❤️❤️";
                    
                }, "10");
        }
    })
}
document.querySelector(".ed").addEventListener("click",function(){
    var audi3 = new Audio("audio/perfect.mp3");
    audi3.play();
})
var myImg = document.querySelectorAll("img")[1];
function cc(){
    setTimeout(() => {
        myImg.src = "./images/NS_1.jpg";
        
    },"100");
}
myImg.addEventListener("click",cc);