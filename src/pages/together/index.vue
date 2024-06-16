<template>
  <v-container>
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
            <v-img
          src="@/assets/verpackung.png"
            max-height="33vh"
          />
          </v-col>
        </v-row></v-container>
          </v-card-text>
        <v-card-actions><v-spacer/> <v-btn disabled variant="text">Kauf Mich!</v-btn></v-card-actions>
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
};
</script>

<style lang="scss" scoped></style>
