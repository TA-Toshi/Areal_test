<template>
    <v-container>
        <v-textarea maxlength="254" label="Текст" v-model="text"/>
        <v-btn outlined v-on:click="addComment">
            Добавить
        </v-btn>
    </v-container>
</template>

<script>
    export default{
        data: () => ({
            text: ''
        }),
        props:{
            articleid:{
                type: String,
                required: true,
            }

        },
        methods:{
            addComment(){
                console.log(this.articleid)
                console.log(this.text)
                if (this.text){
                
                    
                    this.axios(`http://localhost:5000/api/comments/`+ this.articleid+`/comment/`, {
                    method: "post",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                    "text": this.text,
                    "articleId": this.articleid
                })
                
                })
                location.reload() 
                this.text = '' 
                }
                
            }
        }
        
    }
</script>
<style>

</style>