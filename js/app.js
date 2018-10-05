document.addEventListener("DOMContentLoaded", function(){

    var box = document.querySelector(".box");
    var box2 = document.querySelector(".box2");
    var box3 = document.querySelector(".box3");
    var btn = document.querySelector(".mini-button");
    var btn2 = document.querySelector(".box2 .mini-button");
    var btn3 = document.querySelector(".box3 .mini-button");
    var mainText = document.querySelector("#main-text");
    var mainText2 = document.querySelector("#main-text2");
    var mainText3 = document.querySelector("#main-text3");
    var circle = document.querySelector(".circle_up");
    var circle2 = document.querySelector(".box2 .circle_up");

    var article = document.querySelector(".article");
    var background = document.querySelector(".article .background");
    var article2 = document.querySelector(".article2");
    var background2 = document.querySelector(".article2 .background");

    box.addEventListener('mouseover', function(){

        box.style.backgroundColor = "#27c7ab";
        btn.style.backgroundColor = "#f9f9f9";
        mainText.style.color = "#f9f9f9";
        btn.style.color = "#27c7ab";
        circle.style.backgroundImage = "radial-gradient(lightgray 40%, #27c7ab 40%)";
        circle.style.border = "none";
    });

    box.addEventListener('mouseleave', function(){

        box.style.backgroundColor = "#f9f9f9";
        btn.style.backgroundColor = "#27c7ab";
        mainText.style.color = "#27c7ab";
        btn.style.color = "#f9f9f9";
        circle.style.backgroundImage = "radial-gradient(lightgray 40%, white 40%)";
        circle.style.border = "1px solid lightgray";
    });

    box2.addEventListener('mouseover', function(){

        box2.style.backgroundColor = "#27c7ab";
        btn2.style.backgroundColor = "#f9f9f9";
        mainText2.style.color = "#f9f9f9";
        btn2.style.color = "#27c7ab";
        circle2.style.backgroundImage = "radial-gradient(lightgray 40%, #27c7ab 40%)";
        circle2.style.border = "none";
    });

    box2.addEventListener('mouseleave', function(){

        box2.style.backgroundColor = "#f9f9f9";
        btn2.style.backgroundColor = "#27c7ab";
        mainText2.style.color = "#27c7ab";
        btn2.style.color = "#f9f9f9";
        circle2.style.backgroundImage = "radial-gradient(lightgray 40%, white 40%)";
        circle2.style.border = "1px solid lightgray";
    });

    box3.addEventListener('mouseover', function(){

        box3.style.backgroundColor = "#27c7ab";
        btn3.style.backgroundColor = "#f9f9f9";
        mainText3.style.color = "#f9f9f9";
        btn3.style.color = "#27c7ab";
    });

    box3.addEventListener('mouseleave', function(){

        box3.style.backgroundColor = "#f9f9f9";
        btn3.style.backgroundColor = "#27c7ab";
        mainText3.style.color = "#27c7ab";
        btn3.style.color = "#f9f9f9";
    });

    article.addEventListener('mouseover', function(){
        background.style.display = "none";
    })

    article.addEventListener('mouseleave', function(){
        background.style.display = "block";
    })

    article2.addEventListener('mouseover', function(){
        background2.style.display = "none";
    })

    article2.addEventListener('mouseleave', function(){
        background2.style.display = "block";
    })


    //slider

    function Slider(selector, pauseTime) {
        this.slider = document.querySelector(selector);
        this.slides = this.slider.querySelectorAll(".slider-slide");
        this.current = 0; //nr slajdu aktualnego
        this.time = null; //tutaj podstawie interval

        if (typeof pauseTime !== "number") {
            pauseTime = 3000;
        }

        this.pauseTime = pauseTime; //opoznienie miedzy automatycznym zmienianiem slajdow

        //podpinamy i wylapujemy przyciski
        this.createButtons();

        //automatycznie przelaczamy slajd po wejsciu na strone
        this.time = setTimeout(function() {
            this.nextSlide();
        }.bind(this), this.pauseTime);
    }

    Slider.prototype.prevSlide = function() {
        //usuwamy klase wszystkim slajdom
        for (var el of this.slides) {
            el.classList.remove("slider-slide-active");
        }

        //liczymky obency slajd
        this.current--;
        if (this.current < 0) {
            this.current = this.slides.length - 1;
        }

        //dodajemy mu klasę active
        this.slides[this.current].classList.add("slider-slide-active");

        //po kliknięciu ustawiamy na nowo timeout
        clearTimeout(this.time);
        this.time = setTimeout(function() {
            this.nextSlide();
        }.bind(this), this.pauseTime);
    }

    Slider.prototype.nextSlide = function() {
        //usuwamy klase wszystkim slajdom
        for (var el of this.slides) {
            el.classList.remove("slider-slide-active");
        }

        //liczymky obency slajd
        this.current++;
        if (this.current > this.slides.length - 1) {
            this.current = 0;
        }

        //dodajemy mu klasę active
        this.slides[this.current].classList.add("slider-slide-active");

        //po kliknięciu ustawiamy na nowo timeout
        clearTimeout(this.time);
        this.time = setTimeout(function() {
            this.nextSlide();
        }.bind(this), this.pauseTime);
    }

    Slider.prototype.createButtons = function() {
        this.btnPrev = this.slider.querySelector('.slider-prev');
        this.btnNext = this.slider.querySelector('.slider-next');

        var self = this;

        this.btnPrev.addEventListener("click", function() {
            self.prevSlide();
        });

        this.btnNext.addEventListener("click", function() {
            self.nextSlide();
        });
    }


    var s1 = new Slider('#slider1', 5000);
    var s2 = new Slider('#slider2');


});