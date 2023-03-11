<template>
    <v-container>
        <v-col>
        <v-card >
            <v-card-text>
                <v-text-field v-model="comments.text">

                </v-text-field>
                {{ comment.text }}
            </v-card-text>
            <v-btn outlined class="mb-2 ml-2" v-on:click = "()=>{ArtclDelete(comment.id, comment.articleId)}">
                Удалить
            </v-btn>
            <v-btn outlined class="mb-2 ml-2" v-on:click = "OpenDialog">
                Редактировать
            </v-btn>
            <v-btn outlined class="mb-2 ml-2" v-if="Visible" v-on:click = "()=>{CommentUpdate(this.comment.id, this.comment.articleId, comments.text)}">
                Сохранить
            </v-btn>
        </v-card>
    </v-col>
    
    </v-container>
    
</template>

<script>


    
    export default{
        data: () => ({
            Visible: false,
            comments:{text:''},
            text:"s"
        }),
        props:{
            comment:{
                type: Object,
                required: true,
            }
        },
       
        methods:{
            ArtclDelete(id, articleId){
                this.axios(`http://localhost:5000/api/comments/`+ articleId+`/comment/`+id, {
                method: "delete"})
                location.reload()
            },
            OpenDialog(){
                this.Visible = true
                this.axios.get(`http://localhost:5000/api/comments/`+this.comment.articleId + `/comment/`+ this.comment.id)
                .then(response => this.comments = response.data)
            },
            CommentUpdate(id,articleid, text ){
                this.axios(`http://localhost:5000/api/comments/`+ articleid + `/comment/`+ id, {
                method: "patch",
                headers: {
                'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                "text": text
            })})
                location.reload()
                console.log(id, text, articleid)
            }

        }
        

    }
</script>
<style>

</style>