<template>
  <v-dialog
    class="dialog"
    v-model="dialog"
    overlay
    location="center center"
    transition="dialog-transition"
    full-width
    justifty="center"
    persistent
  >
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card min-height="50vh" width="66vw" class="flex-card">
            <v-toolbar density="compact" class="bg-card-background"
              ><the-language-toggle
            /></v-toolbar>
            <v-card-text>
              <MarkdownContent content-path="dialog" />
            </v-card-text>
            <v-card-actions>
              <v-row align="end" justify="space-around">
                <v-col
                  ><v-btn
                    width="100%"
                    variant="text"
                    :color="leaving ? 'warning' : ''"
                    :prepend-icon="leaving ? 'mdi-close' : ''"
                    tile
                    href="http://www.google.com"
                    @click="leaving = true"
                    >{{ $t("ui.buttons.leave") }}</v-btn
                  ></v-col
                >
                <v-col
                  ><v-btn
                    variant="text"
                    width="100%"
                    tile
                    @click="
                      agreed = true;
                      toggleDialog();
                    "
                    :color="agreed ? 'success' : ''"
                    :append-icon="agreed ? 'mdi-check' : ''"
                    >{{ $t("ui.buttons.confirm") }}</v-btn
                  ></v-col
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
  props: {
    timeoutUntilDialogIsDisplayed: {
      type: Number,
      default: 1500,
    },
    timeoutAfterAgreed: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      dialog: false,
      agreed: false,
      leaving: false,
    };
  },
  computed: {
    page() {
      return this.$content("dialog");
    },
    storageKey() {
      return process.env.VUE_APP_DISCLAIMER_STORAGE_KEY;
    },
  },
  watch: {
    agreed(value) {
      if (value) {
        localStorage.setItem(this.storageKey, value);
      }
    },
  },
  methods: {
    toggleDialog() {
      setTimeout(
        () => (this.dialog = !this.dialog),
        this.dialog && this.agreed
          ? this.timeoutAfterAgreed
          : this.timeoutUntilDialogIsDisplayed
      );
    },
  },
  beforeMount() {
    this.agreed =
      localStorage.getItem(process.env.VUE_APP_DISCLAIMER_STORAGE_KEY) == "true";
    if (!this.agreed) {
      this.toggleDialog();
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
