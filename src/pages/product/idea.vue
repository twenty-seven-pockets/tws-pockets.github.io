<template>
  <v-card flat class="bg-cardBackground text-text">
    <v-card-title align="center">
      {{$t('company.articles.productidee.title')}}
    </v-card-title>
    <v-card-text >
      <v-container>

        <ul>
          
          <li>
            {{$t('company.articles.productidee.punkt1')}}
  
        </li>
        <li>
          {{$t('company.articles.productidee.punkt2')}}
          
        </li>
        <li>
          {{$t('company.articles.productidee.punkt3')}}
          
        </li>
      </ul>
    </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name : "ProductIdeaView"
    
  }
</script>

<style lang="scss" scoped>

</style>