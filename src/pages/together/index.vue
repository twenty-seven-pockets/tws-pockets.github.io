<template>
  <v-container>
  <v-row>
    <v-col><MarkdownContent content-path='together'/></v-col>
  </v-row>
    <v-row>
      <v-col>
        <introduction class="my-5" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <application />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <location />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      <ribbon-component :text="$t('company.comingSoon')">
        <v-card  >
        <v-card-text >
        <v-container style="margin-top:20px;">
        <v-row>
          <v-col>
          <figure>
            <v-img
          src="@/assets/verpackung.png"
            max-height="33vh"
          />
          <figcaption align="center" style="font-weight: bold; opacity:.3">{{$t('company.productTeaserDisclaimer')}}</figcaption>
          </figure>
          </v-col>
        </v-row>
        </v-container>
          </v-card-text>
        <v-card-actions><v-spacer/> 
        <v-btn  variant="outlined" :color="(isHoveringButton?'card-b':'action-button-color')" @mouseenter="isHoveringButton = true" @mouseleave="isHoveringButton = false">
        {{!isHoveringButton?$t('company.buyMe'):$t('company.comingSoon')}}
        </v-btn>
        
        
         <v-spacer/></v-card-actions>
        </v-card>
      </ribbon-component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import introduction from "./introduction.vue";
import application from "./application.vue";
import location from "./location.vue";
export default {
  name: "TogetherPage",
  components: { introduction, application, location },
  data() {
    return {
      isHoveringButton : false
    }
  },
};
</script>

<style lang="scss" scoped></style>
