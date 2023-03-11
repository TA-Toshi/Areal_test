<!-- <template>
    <div>
        NEW
    </div>
</template>

<script>
    export default{

    }
</script>
<style>

</style> -->
<template>
    <v-container>
        <v-col >
            <v-text-field maxlength="254" label="Заголовок" v-model="title"/>
            <v-textarea maxlength="254" v-model="text" label="Текст "/>
            <v-btn v-on:click="addArticle"  outlined>
                Добавить
            </v-btn>
        </v-col>
    </v-container>
</template>

<script>
    export default{
        data: ()=>({
            title:'',
            text:''
        }),
        methods:{
            addArticle(){
                if (this.text && this.title){
                        let article = {
                        title: this.title,
                        text: this.text
                    }
                    this.$emit('addArticle', article)

                    this.text = '',
                    this.title = ''
                }
                
            }
        }
    }
</script>
<style>

</style>