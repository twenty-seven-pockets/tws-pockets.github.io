<template>
  <v-card
    align="center"
    flat
    class="bg-background"
  >
    <v-card-title>
      {{ $t("impressum") }}
    </v-card-title>
    <v-card-text>
      <table>
        <tbody>
          <tr>
            <td>Name und Anschrift</td>
            <td></td>
          </tr>
          <tr>
            <td>Name und Anschrift</td>
            <td></td>
          </tr>
          <tr>
            <td>KOntaktinformation</td>
            <td></td>
          </tr>
          <tr>
            <td>Vertretungsberechtigte Personen</td>
            <td></td>
          </tr>
          <tr>
            <td>Regestierungsinformationen</td>
            <td></td>
          </tr>
          <tr>
            <td>Aufsichtsbehörde</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
    <v-card-subtitle> Haftungsausschluss </v-card-subtitle>
    <v-card-text>
      - Urheberrechtshinweise (Nutzung Bilder, Texte, Informationen)
    </v-card-text>
    <v-card-subtitle> Haftungsausschluss </v-card-subtitle>
    <v-card-text> - (keine Haftung für Inhalte externer Links) </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ImpressumView",
};
</script>

<style lang="scss" scoped></style>
