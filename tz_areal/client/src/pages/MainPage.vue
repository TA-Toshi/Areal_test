<template>
    <v-container>
        <v-row>
            <NewArticle @addArticle="addArticle"/>    
            <ArticleList 
            v-for="article in articles"
            :key="article.id"
            v-bind:article="article"
        />
        </v-row>
        
    </v-container>
</template>

<script>
    import NewArticle from '@/components/Article/NewArticle.vue';
    import ArticleList from '@/components/Article/ArticleList.vue';
    export default{
        components:{
            ArticleList,
            NewArticle
        },
        data: () => ({
            articles: []
        }),
        mounted(){
        this.fetchTodo()
        },
        methods:{
            fetchTodo(){
                // url
                this.axios.get(`http://localhost:5000/api/articles/`)
                .then(response => this.articles = response.data)
            },
            addArticle(article){
                this.axios(`http://localhost:5000/api/articles/article`, {
                    method: "post",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                    "title": article.title,
                    "text": article.text
                })
                
                })
                location.reload()
            }
        }
}
</script>
<style>

</style>