document.addEventListener("DOMContentLoaded", function(){

    var arrow = document.querySelectorAll(".list_arrow");
    var arrow1 = document.querySelector("#arrow_1");
    var arrow2 = document.querySelector("#arrow_2");
    var arrow3 = document.querySelector("#arrow_3");

    var listPanel = document.querySelector(".list_panel_1");
    var listPanel_2 = document.querySelector(".list_panel_2");
    var listPanel_3 = document.querySelector(".list_panel_3");

    var liElements = document.querySelectorAll(".list_panel_1 li");
    var liElements_2 = document.querySelectorAll(".list_panel_2 li");
    var liElements_3 = document.querySelectorAll(".list_panel_3 li");

    var colorValue = document.querySelector(".colorValue");
    var patternValue = document.querySelector(".patternValue");
    var transport = document.querySelector("#transport");
    var transportText = document.querySelector(".transport");
    var transportValue = document.querySelector(".transportValue");

    var sum = 0;
    var sum2 = 0;
    
    var suma2 = document.querySelector(".sum strong");

    var price_1 = 80;
    var price_2 = 200;
    var price_3 = 90;
    var price_4 = 110;
    var price_5 = 300;
    var transportPrice = 200;

    for(var el of arrow ){
        el.addEventListener('click', function(){
            var list = this.nextElementSibling;

            if(list.style.display == "none"){
                list.style.display = "block";
            }else{
                list.style.display = "none";
            }
        })
    }


    for(var el of liElements){
        var label = document.querySelector("#label_1");
        var title = document.querySelector(".title");
        el.addEventListener('click', function(){
            label.innerHTML = this.innerHTML;
            title.innerHTML = this.innerHTML;
            listPanel.style.display = "none";
        })
    }

    for(var el of liElements_2){
        var label2 = document.querySelector("#label_2");
        var color = document.querySelector(".color");
        el.addEventListener('click', function(){
            label2.innerHTML = this.innerHTML;
            color.innerHTML = this.innerHTML;
            listPanel_2.style.display = "none";

            if(color.innerHTML == "Czerwony"){
                colorValue.innerHTML = price_1 + " zł";
                sum = 0;
                sum+=price_1;
                suma2.innerHTML = sum+sum2;
            }

            if(color.innerHTML == "Czarny"){
                colorValue.innerHTML = price_3 + " zł";
                sum = 0;
                sum = sum+=price_3;
                suma2.innerHTML = sum+sum2;
            }

            if(color.innerHTML == "Pomarańczowy"){
                colorValue.innerHTML = price_4 + " zł";
                sum = 0;
                sum = sum+=price_4;
                suma2.innerHTML = sum+sum2;
            }

        })

    }


    for(var el of liElements_3){
        var label3 = document.querySelector("#label_3");
        var pattern = document.querySelector(".pattern");
        el.addEventListener('click', function(){
            label3.innerHTML = this.innerHTML;
            pattern.innerHTML = this.innerHTML;
            listPanel_3.style.display = "none";

            if(pattern.innerHTML == "Skóra"){
                patternValue.innerHTML = price_2 + " zł";
                sum2 = 0;
                sum2+=price_2;
                suma2.innerHTML = sum+sum2;
            }

            if(pattern.innerHTML == "Tkanina"){
                patternValue.innerHTML = price_5 + " zł";
                sum2 = 0;
                sum2+=price_5;
                suma2.innerHTML = sum+sum2;
            }
        })
    }



});
