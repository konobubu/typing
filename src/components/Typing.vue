<template>
    <div class="a">
        {{text}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'スペースを押して開始',
            timeLimit: 3 * 1000,
            interval: 1000,
            count: 2,
            startTime: '',
            timeLeft: '',
            loc: 0,
            q_ind: 0,
            s_ind: 0,
            array: [],
            question: [
                "apple",
                "iphone",
                "kouno",
            ]
        }
    },
    methods:{
        startCountdown(){
            // this.timeLeft = this.timeLimit + this.startTime - Date.now();
            // // 範囲は 0 - 3 * 1000
            // //これを1秒に一回繰り返す 
            // this.text = (this.timeLeft / 1000).toFixed(2) //小数点以下を表示しない
            const timeId = setTimeout(function(){
                this.startCountdown() // 1ミリ秒に一回呼び出される
            }.bind(this), this.interval);

            if(this.count > 0){
                this.text = this.count
                this.count--;
                console.log(this.count)
            }else if(this.count <= 0){
                clearTimeout(timeId);
                console.log("owari")
                this.showQuestion();
                let word = this.keydown();
                this.keydownWord(word)
                // this.keydownWord()
            }
        },
        keydown(){
            const self = this;
            window.addEventListener('keydown', function(e){
                return self.keydownWord(e.key);
            });            
        },
        keydownWord(key){
            // let len = this.question[0].length
            if(key == this.question[this.q_ind][this.s_ind]){
                console.log("A");
                this.array[this.s_ind] = key; //現在の単語をarrayにぶち込む
                this.s_ind++; //一致した場合にはindexをあげる
                // console.log(len)
                
                if(this.array.length == this.question[this.q_ind].length){ 
                    this.array = [];
                    this.q_ind++; //次の問題のindex
                    this.s_ind = 0;
                    this.showQuestion();
                    this.keydownWord()
                    console.log("ght")
                }
            }
        },
        showQuestion(){
            console.log(this.q_ind)
            if(this.q_ind == this.question.length){
                this.q_ind = 0;
            }
            this.text = this.question[this.q_ind]
        }
    },
    created(){
        window.addEventListener('keydown', (e) =>{
            if(e.key == ' '){
                console.log("success")
                this.startTime = Date.now();
                this.startCountdown();
                return false;
            }
        })
    }
}
</script>