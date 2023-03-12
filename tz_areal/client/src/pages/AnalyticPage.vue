<template>
    <v-container>
        <v-row>
            <v-text-field maxlength="254" type="date" class="mr-5" label="От" v-model="datefrom"/>
            <v-text-field maxlength="254" type="date" class="ml-5" label="До" v-model="dateto"/>
        </v-row>
        <v-btn outlined class="ml-3" v-on:click="DateSort">
            Показать
        </v-btn>
        <v-col
        v-for="comment in comments"
        :key="comment.id">
        <v-card>
            <v-card-title>
                Номер статьи: {{ comment.articleId }}
            </v-card-title>
            <v-card-text>
                {{ comment.text }}
            </v-card-text>
        </v-card>   
    </v-col>
    </v-container>
</template>

<script>
export default{
    data: ()=>({
        datefrom:'',
        dateto: '',
        comments:[]
    }),
    methods:{
        DateSort(){
                if (this.datefrom && this.dateto){
                        this.axios.get(`http://localhost:5000/api/analytic/comments/?dataFrom=`+ this.datefrom+`&dataTo=`+this.dateto)
                        .then(response => this.comments = response.data)
                    }
                }
                
            }
    }
</script>
<style>

</style>