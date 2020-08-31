<template>
 <v-container
    id="ml-prediction"
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
             <h2>Face Image AI Analysis</h2>
            </div>

            <div class="subtitle-1 font-weight-light">
                
              <p>Note that AI models are not 100% accurate. Please consult your doctor for proper medical analysis if you have any concerns about the results above. </p>
                <p>Links: </p>
                <a href="https://launchpad.ucsf.edu/covid-19-hackathon">UCSF 2020 COVID-19 Hackathon</a>
                <br>
                <a href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2673289">Reference for BMI and cardiovascular disease risk statistics. Khan et al. (2018), JAMA Cardiology.</a>
            
            </div>
          </template>
         
            <v-container class="py-0">
              <v-row>
                  <h4 class="card-title font-weight-light mt-2 ml-2">
                     Upload your image to analyse
                </h4>
              </v-row>
              <v-row>
               <v-card-text>
                  <v-file-input 
                    ref="file" 
                    v-model="files"
                    @change="selectFile"
                    style="width: 80%" 
                    chips  
                    outlined 
                    dense 
                    prepend-icon="mdi-camera" 
                    accept="image/*" 
                    label="Image File to Analyse"></v-file-input>
               </v-card-text> 
              </v-row>
              <v-row>
              <div class="btn-toolbar">
                <v-btn
                @click="sendBMI"
                color="success"
                rounded
                class="mr-0"
                >
                Predict BMI
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                @click="getEmotion"
                color="success"
                rounded
                class="mr-0"
                >
                Predict Emotion
                </v-btn>
              </div>
            </v-row>
            <v-row>
                  <h4 class="card-title font-weight-light mt-2 ml-2">
                       Your Results are : 
                </h4>
            </v-row>
            <v-row>
                <h4 class="card-title font-weight-light mt-2 ml-2">
                  <span v-html="resultData"></span>
                </h4>
                 <br>
            </v-row>


            </v-container>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>


      
</template>
    
<script>
import { getBMI, getEmotion } from "@/api/ml.api"

export default {
  components: {},
  data: () => ({
    files: null,
    resultData: "",
    bmiData: "Your BMI data is normal !! ",
    emotionData: "Your emotion data is Neutral ",
    selectedFile: null,
  }),
  mounted() {
    console.log("*** --> mounter ML Precit")
  },
  methods: {
    selectFile() {
      this.selectedFile = this.files
      // alert(this.$refs.file)
      console.log(this.$refs.file.files)
      console.log(this.selectedFile)
    },
    handleComplete(err, confirmation) {
      if (err) {
        alert("bot conversation failed")
        return
      }
      // alert("done: " + JSON.stringify(confirmation, null, 2))
      console.log("done: " + JSON.stringify(confirmation, null, 2))
      return "yo"
    },
    async sendBMI() {
      console.log("send BMI")
      console.log(this.selectedFile)
      console.log("sending this file to BMI")
      console.log(this.files)
      const response = await getBMI(this.files)
      if (!response.status == "200") {
        alert("BMI prediction services is down")
      }
      this.resultData = response.data
      console.log(response)
    },

    async getEmotion() {
      console.log("send getEmotion")
      console.log(this.selectedFile)
      console.log("sending this file to Emotion")
      console.log(this.files)
      const response = await getEmotion(this.files)
      if (!response.status == "200") {
        alert("Emotion prediction services is down")
      }
      this.resultData = response.data
      console.log(response)
      this.resultData = response.data
    },
  },
}
</script>
<style >
</style>
