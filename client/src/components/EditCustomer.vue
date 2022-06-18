<template>
  <div>
    <h1>Edit Customer Component</h1>
    <b-container>
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="ecustomer.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Address:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="ecustomer.address"
              placeholder="Enter Address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="ecustomer.mobile"
              placeholder="Enter Phone Number"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Email:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="ecustomer.email"
              placeholder="Enter Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="ecustomer.password"
              type="password"
              placeholder="Enter Password"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ ecustomer }}</pre>
        </b-card>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios'



export default {
    name: 'EditCustomer',
    data() {
      return {
        ecustomer: {
          name: '',
          address: '',
          mobile: '',
          email: '',
          password: ''
        },
        show: true
      }
    },
     methods: {
      onSubmit(event) {
        // event.preventDefault()
      //  console.log($route.params.id)

        event.preventDefault()
        let apiUrl =`http://localhost:8081/api/banking/updateByIdCustomer/${this.$route.params.id}
`

    //     // Axios
        axios.put(apiUrl, this.customer)
        .then(() => {
            this.$router.push("/customers")
            this.ecustomer = {
               name: '',
              address: '',
                mobile: '',
                email: '',
                password: ''
             }
         })
        .catch((error) => {
            console.log(error)
       })

      }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.ecustomer.name = ''
        this.ecustomer.address = ''
        this.ecustomer.mobile = ''
        this.ecustomer.email = ''
        this.ecustomer.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
</script>
