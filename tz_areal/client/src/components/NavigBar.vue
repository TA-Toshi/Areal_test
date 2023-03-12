<template>
    <v-container fluid>
        <v-app-bar
            color="grey">

            <v-app-bar-title>
                Статьи
            </v-app-bar-title>

            <v-spacer/>

            <v-btn outlined class="ml-3">
                <router-link to ="/" style="color: black; text-decoration: none;">
                    Список статей
                </router-link>
            </v-btn>
            <v-btn outlined class="ml-3">
                <router-link to ="/analytic/" style="color: black; text-decoration: none;">
                    Комментарии за период
                </router-link>
            </v-btn>

        </v-app-bar>
    </v-container>
</template>
<script>
    export default{

    }
</script>
<style>

</style>