<template>
  <v-dialog
    class="dialog"
    v-model="dialog"
    overlay
    location="center center"
    transition="dialog-transition"
    full-width
    justifty="center"
  >
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card min-height="50vh" min-width="66vw" class="flex-card">
            <v-card-title>{{ $t("company.disclaimer.title") }}</v-card-title>
            <v-card-text>{{ $t("company.disclaimer.text") }}</v-card-text>
            <v-card-actions>
              <v-row align="end" justify="space-around">
                <v-col cols="auto"
                  ><v-btn variant="text" tile href="http://www.google.com"
                    >{{$t("words.leave")}}</v-btn
                  ></v-col
                >
                <v-col cols="auto"
                  ><v-btn variant="text" tile @click="agreed = true">{{$t('words.ok')}}</v-btn></v-col
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: "TheDisclaimerDialog",
  data() {
    return {
      dialog: false,
      agreed: false,
    };
  },
  watch: {
    agreed(value) {
      if (this.agreed) {
        this.dialog = false;
        localStorage.setItem("kussy-disclaimer-agreed", value);
      }
    },
  },
  beforeMount() {
    this.agreed = localStorage.getItem("kussy-disclaimer-agreed") == "true";
    console.log("", { a: this.agreed });
    if (!this.agreed) {
      setTimeout(() => (this.dialog = true), 1500);
    }
  },
};
</script>

<style lang="css" scoped>
.flex-card {
  display: flex;
  flex-direction: column;
}
</style>
