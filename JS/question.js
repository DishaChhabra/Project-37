class Form{
    constructor(){
        this.title = createElement("h1")
        this.input1 = createInput("Enter your name here...")
        this.input2 = createInput("Enter correct option number here")
        this.button = createButton("Submit")
        this.option1 = createElement("h3")
        this.option2 = createElement("h3")
        this.option3 = createElement("h3")
        this.option4 = createElement("h3")
        this.question = createElement("h3")
        this.restart = createButton("RESTART")
        this.restart_text = createElement("h5")
    }
    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
        this.question.hide()
        this.option1.hide()
        this.option2.hide()
        this.option3.hide()
        this.option4.hide()
    }
    display(){
        
        this.title.html("QUIZ GAME")
        this.title.position(355,20)
        
        this.question.html("Q) What ten-letter word starts with gas?")
        this.question.position(30,90)

        this.option1.html("1) Government")
        this.option1.position(30,120)

        this.option2.html("2) Automobile")
        this.option2.position(30,150)

        this.option3.html("3) Retirement")
        this.option3.position(30,180)

        this.option4.html("4) Television")
        this.option4.position(30,210)

        this.input1.position(360,280)
        this.input2.position(360,310)
        this.button.position(420,350)

        this.button.mousePressed(() => {
                this.title.hide();
                this.input1.hide();
                this.input2.hide();
                this.button.hide();
                contestant.name = this.input1.value();
                contestant.answer = this.input2.value();
                contestantCount++;
                contestant.index = contestantCount;
                contestant.setInfo();
                contestant.setCount(contestantCount);
                quiz.play()
        })

        this.restart.position(740,50)
        this.restart.mousePressed(() => {
            contestant.setCount(0)
            quiz.setState(0)
        })
        this.restart_text.html("Please restart after clicking.")
        this.restart_text.position(700,55)
    }
}