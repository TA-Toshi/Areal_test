<template>
    <v-col cols="3">
        <v-card >
            <v-card-title :to="'/article/'+ article.id">
                {{ article.title }}
            </v-card-title>
            <v-card-text>
                {{ article.text }}
            </v-card-text>
            <v-btn outlined class="mb-2 ml-2" v-on:click = "()=>{ArtclDelete(article.id)}">
                Удалить
            </v-btn>
            <v-btn outlined class="mb-2 ml-2" :to="'/article/'+ article.id">
                Редактировать
            </v-btn>
        </v-card>
    </v-col>
</template>

<script>

    export default{
        props:{
            article:{
                type: Object,
                required: true,

            }
        
        },
        methods:{
            ArtclDelete(id){
                this.axios(`http://localhost:5000/api/articles/article/`+ id, {
                method: "delete"})
                location.reload()
            }
        }
    }
    
</script>
<style>

</style>