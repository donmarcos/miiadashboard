<template>
  <v-container id="Search-Prov-Type" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              MIIA Health Check Bot
            </div>

            <div class="subtitle-1 font-weight-light">
              Welcome to MIIA Search Provider Type bot You can search for a
              provider/caregiver on your area by entering some information about
              your current location please type START to continue
            </div>
          </template>

          <v-container class="py-0">
            <v-row>
              <amplify-chatbot
                ref="chatb"
                id="chatbot"
                v-bind:chatbotConfig="chatbotConfig"
              ></amplify-chatbot>
            </v-row>
          </v-container>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Interactions } from "aws-amplify"
//import AmplifyEventBus from "aws-amplify-vue"
//import { AmplifyEventBus } from "aws-amplify-vue"

export default {
  components: {},
  data: () => ({
    chatbotConfig: {
      bot: "miiaprovsearch",
      botTitle: "MIIA Health Check bot",
      alias: "miiaprovsearch",
      region: "us-west-2",
      welcomeMessage: "Welcome, how can I help you today?",
      clearComplete: false,
      voiceEnabled: true,
      error: "",
    },
  }),
  mounted() {
    console.log("*** --> mounter miiaprovsearch")

    // Provide a bot name and user input
    //Interactions.send("miiahealthcheck_dev", userInput).then(function(
    // response
    //) {
    //  console.log(response.message)
    //})

    //this.$refs.chatb.onSubmit("miia")

    Interactions.onComplete("miiaprovsearch", this.handleComplete)

    console.log("*** --> mounter miiaprovsearch")
  },
  methods: {
    handleComplete(err, confirmation) {
      if (err) {
        alert("bot conversation failed")
        return
      }
      // alert("done: " + JSON.stringify(confirmation, null, 2))
      console.log("done: " + JSON.stringify(confirmation, null, 2))
      return "yo"
    },
    setError: function(e) {
      this.error = this.$Amplify.I18n.get(e.message || e)
      console.log(this.error)
    },
  },
}
</script>
<style>
#chatbot {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
