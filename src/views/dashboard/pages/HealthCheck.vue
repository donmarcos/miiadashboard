<template>
 <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              MIIA Health Check Bot
            </div>

            <div class="subtitle-1 font-weight-light">
              Welcome to MIIA Health Check Up bot 
              Today we will ask you a couple of questions 
              about your health, if you are READY please 
              type or say START 
            </div>
          </template>
         
            <v-container class="py-0">
              <v-row>
                  
                    <amplify-chatbot id="chatbot" v-bind:chatbotConfig="chatbotConfig"></amplify-chatbot>
                
                </v-row>
            </v-container>
        
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>


      
</template>
    
<script>
import { Interactions } from "aws-amplify"
//import { AmplifyEventBus } from "aws-amplify-vue"

export default {
  components: {},
  data: () => ({
    chatbotConfig: {
      bot: "miiahealthcheck_dev",
      botTitle: "MIIA Health Check bot",
      alias: "miiahealthcheck_dev",
      region: "us-west-2",
      welcomeMessage: "Welcome, how can I help you today?",
      clearComplete: false,
      voiceEnabled: true,
    },
  }),
  mounted() {
    console.log("*** --> mounter healthcheck")

    // Provide a bot name and user input
    //Interactions.send("miiahealthcheck_dev", userInput).then(function(
    // response
    //) {
    //  console.log(response.message)
    //})

    Interactions.onComplete("miiahealthcheck_dev", this.handleComplete)

    console.log("*** --> mounter healthcheck")
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
  },
}
</script>
<style >
#chatbot {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
