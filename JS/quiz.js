class Quiz{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }
    setState(state){
        database.ref("/").update({
            gameState: state
        })
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant()
            var contestantCountRef = await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
            }
            form = new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        background("black")
        fill("white")
        textSize(20)
        text("THE RESULT OF THE QUIZ",290,60)
        text("_______________________",290,63)
        contestant.getInfo()
        if(allContestants !== undefined){
            var answer_y = 80
            fill("white")
            textSize(15)
            text("The contestants or contestant who answered the question correctly will be highlighted in BLUE.", 110, 330)
            text("____________________________________________________________________________", 110, 335)

            for(var i in allContestants){
                var correctAns = "2"
                if(correctAns === allContestants[i].answer){
                    fill("blue")
                } else{
                    fill("green")
                }
                answer_y = answer_y+50
                textSize(30)
                text(allContestants[i].name + ":" + allContestants[i].answer, 375, answer_y)

            }
        }
    }
}