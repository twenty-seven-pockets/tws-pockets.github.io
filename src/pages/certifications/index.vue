<template>
  <v-container>
    <v-row align="center">
      <v-col  align="center">
        <MarkdownCardWithIcon path="certifications/index" />
      </v-col>
      </v-row><v-row>
      <v-col align="center">
        <MarkdownCardWithIcon
          path="certifications/certificates"
          custom-icon="CertificatesCardIcon"
        />
      </v-col>
      </v-row><v-row>
      <v-col  align="center">
        <MarkdownCardWithIcon path="certifications/tests" custom-icon="TestsCardIcon" />
        <!-- <certificates/> -->
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
// import Certificates from './certificates.vue';
// import Standards from './standards.vue';

export default {
  name: "CertificationsIndex",

  // components: { Standards, Certificates }
};
</script>

<style lang="scss" scoped></style>
