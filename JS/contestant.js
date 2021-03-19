class Contestant{
    constructor(){
        this.name = null,
        this.index = null,
        this.answer = 0
    }
    getCount(){
        database.ref("contestantCount").on("value", function (data){
            contestantCount = data.val()
        })
    }
    setCount(count){
        database.ref("/").update({
            contestantCount : count
        })
        }
    setInfo(){
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
       })
    }
    getInfo(){
        database.ref("contestants").on("value", function (data){
            allContestants = data.val()
           // console.log(allContestants)
        })
    }
    }
