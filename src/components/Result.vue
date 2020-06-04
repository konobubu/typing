<template>
    <div class="result-wrapper">
        <div class="score-wrapper">
            <p>正解数:{{correct}}</p>
            <p>不正解数:{{incorrect}}</p>
            <p>正解率{{correctRate}}</p>
        </div>
        <div class="link-btn-wrapper">
            <router-link to="/" class="link-btn">Home</router-link> 
            <router-link to="/typing" class="link-btn">Restart</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        correct: [String, Number],
        incorrect: [String, Number],
    },
    computed: {
        correctRate(){
            return (this.correct / (this.correct + this.incorrect)).toFixed(2);
        }
    },
}
</script>

<style scoped lang="scss">

.result-wrapper{
    width: 50%;
    margin: 0 auto;
}

.score-wrapper{
    border: 2px solid #000;
}

.link-btn-wrapper{
    width: 50%;
    margin: 0 auto;
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
}

.link-btn{
    display: inline-block;
    text-decoration: none;
    padding: 0.1em 0.5em;
    border: 2px solid #808000;
    color: #808000;
    font-size: 18px;
    transition: 0.2s ease;
}

.link-btn:hover{
    background-color: #808000;
    color: #fff;
}

</style>