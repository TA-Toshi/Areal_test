<template>
        <v-container>
            <v-text-field maxlength="254" label="Заголовок" v-model="articles.title"/>
            <v-textarea maxlength="254" v-model="articles.text" label="Текст"/>
            <v-btn outlined  v-on:click="()=>{ArtclUpdate(this.id, articles.title, articles.text)}">
                Сохранить изменения
            </v-btn>
            <h2 class="mt-10">
                Комментарии
            </h2>
            <hr class="mt-2"/>
            <NewComment
            v-bind:articleid="this.id"
            />
            <CommntsList 
            v-for="comment in comments"
                :key="comment.id"
                v-bind:comment="comment" 
            />
            
        </v-container>
</template>

<script>
    import CommntsList from '@/components/Comments/CommntsList.vue'
    import NewComment from '@/components/Comments/NewComment.vue'
    export default{
        components:{
    CommntsList,
    NewComment,
},
        props:{
            id:{
                type: String,
            }  
        },
        data: ()=>({
            articles:{title:'', text:''},
            comments:[],
        }),
        created(){
            this.axios.get(`http://localhost:5000/api/articles/article/`+ this.id)
            .then(response => this.articles = response.data)
            this.axios.get(`http://localhost:5000/api/comments/`+ this.id)
                .then(response => this.comments = response.data)
        },
        methods:{
            ArtclUpdate(id, title, text){
                this.axios(`http://localhost:5000/api/articles/article/`+ id, {
                method: "patch",
                headers: {
                'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                "title": title,
                "text": text
            })})
                location.reload()
            }
        }
        
    }
</script>
<style>

</style>