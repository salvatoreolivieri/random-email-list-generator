
const app = new Vue({

  el: "#app",

  data: {

    loading: null,
    mailList: [],
    numberEmail: 10,
    allEmailLoaded: false

  },

  methods: {

    generateRandomMail(){

      this.loading = true;
      this.mailList= [];

      setTimeout(() => {

        for (let x = 0; x < this.numberEmail; x++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(item => {

              this.mailList.push(item.data.response);
              this.allEmailLoaded = true;
              console.log(this.mailList);

              if (this.allEmailLoaded){
                this.loading = false;
              } else{
                this.loading = true;
              }


            });  
        }
      }, 1000);

    }

  },

  mounted(){

  }

})

