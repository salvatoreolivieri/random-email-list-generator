
const app = new Vue({

  el: "#app",

  data: {

    loading: null,
    mailList: [],
    numberEmail: 10

  },

  methods: {

    generateRandomMail(){

      this.loading = true
      this.mailList= [];

      setTimeout(() => {

        this.loading = !this.loading;

        for (let x = 0; x < this.numberEmail; x++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(item => {

              this.mailList.push(item.data.response);
              console.log(this.mailList);
            });  
        }
      }, 3000);

    }

  },

  mounted(){

  }

})

