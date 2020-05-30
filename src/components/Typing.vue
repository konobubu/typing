<template>
    <div class="typing-wrapper">
        <div v-if="text" class="count-text">
            {{text}}
        </div>
        <div v-if="timeText">
            {{timeText}}
        </div>
        <div v-if="typeText" class="type-text">
            {{typeText}}
        </div>
        <Result v-if="resultBool"></Result>
    </div>

</template>

<script>
import Result from '@/components/Result.vue'

export default {
    components: {
        Result
    },
    data() {
        return {
            text: 'スペースを押して開始',
            typeText: '',
            timeText: '',
            timeLimit: 20 * 1000,
            interval: 1000,
            count: 2,
            startTime: '',
            timeLeft: '',
            loc: 0,
            q_ind: 0,
            s_ind: 0,
            array: [],
            resultBool: false, //リザルト画面の出力判定
            correct: '',
            incorrect: '',
            question: [
                "apple",
                "note",
                "kouno",
                "sand",
                "game",
                "apex",
                "css",
                "html"
            ]
        }
    },
    methods:{
        startCountdown(){
            // // 範囲は 0 - 3 * 1000
            // //これを1秒に一回繰り返す 
  
            const timeId = setTimeout(function(){
                this.startCountdown() // 1ミリ秒に一回呼び出される
            }.bind(this), this.interval);

            if(this.count > 0){
                this.text = this.count
                this.count--;
                console.log(this.count)
            }else if(this.count <= 0){
                this.text = "";
                this.startTime = Date.now();
                console.log(this.startTime)
                clearTimeout(timeId);
                this.startTimer();
                console.log("owari")
                this.showQuestion();

                let word = this.judgeKey();
                this.keydownWord(word)
            }
        },
        startTimer(){
            this.timeLeft = this.timeLimit + this.startTime - Date.now();

            const timeId = setTimeout(function(){
                this.startTimer();
            }.bind(this), 30);
            
            if(this.timeLeft <= 50){ //多少の誤差は勘弁
                this.timeLeft = 0;
                this.resultBool = true
                console.log(this.timeLeft);
                clearTimeout(timeId)
                console.log(this.correct);
                console.log(this.incorrect);
            }

            this.timeText = (this.timeLeft / 1000).toFixed(2) //小数点2以下を表示しない
            console.log(this.timeText);
        },
        judgeKey(){
            const self = this;
  
            window.addEventListener('keydown', function(e){
                return self.keydownWord(e.key); //keyが押されたらkeydownWordを走らせる
            }); 
        },
        keydownWord(key){
            if(!this.resultBool){ //50ミリ秒以下は実行しない
                if(key == this.question[this.q_ind][this.s_ind]){ //keyと問題の文字が一致した時
                    this.array[this.s_ind] = key; //現在の単語をarrayにぶち込む
                    this.s_ind++; //一致した場合にはindexをあげる
                    this.correct++;
                    console.log(this.array)
                    this.updateText();

                    if(this.array.length == this.question[this.q_ind].length){  //keyの長さと問題の長さが一致した時
                        this.array = []; 
                        this.q_ind++; //次の問題のindex
                        this.s_ind = 0;
                        this.showQuestion();
                        console.log("ght")
                    }

                }else{ //keyと問題の文字が一致しなかった時
                    this.incorrect++;
                }
            }
        },
        updateText(){
            let placeholder = '';
            for(let i=0; i < this.s_ind; i++){
                placeholder += "_";
            }
            this.typeText = placeholder + this.typeText.substring(this.s_ind);
            console.log(this.typeText)
        },
        showQuestion(){
            console.log(this.q_ind)
            if(this.q_ind == this.question.length){
                this.q_ind = 0;
            }
            this.typeText = this.question[this.q_ind]
        },
        shuffle(arr){ 
            for(let i = arr.length - 1; i > 0; i--){ //最後の2つまでが範囲なのでi>0
                let r = Math.floor(Math.random() * (i + 1)); // 0-iでランダムな整数をつくる
                [arr[r], arr[i]] = [arr[i], arr[r]];
            }
            return arr;
        }
    },
    created(){
        let i = 0
        window.addEventListener('keydown', (e) =>{
            if(e.key == ' '){
                i += 1
                if(i==1){ //起動時の一回きりにする
                    this.startTime = Date.now();
                    this.startCountdown();
                }else{
                    console.log(i)
                }
            }
        })

        this.question = this.shuffle(this.question);
        console.log(this.question)
    }
}
</script>

<style scoped lang="scss">

.count-text{
    line-height: 500px;
    font-size: 30px;
    font-weight: bold;
}

.type-text{
    line-height: 500px;
    font-size: 48px;
    letter-spacing: 5px;
}

</style>