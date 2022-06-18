<template>
    <div>
        <h1>Add Customer Component</h1>
        <b-container>
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                   

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input id="input-2" v-model="customer.name" placeholder="Enter name" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Address:" label-for="input-2">
                        <b-form-input id="input-2" v-model="customer.address" placeholder="Enter Address" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
                        <b-form-input id="input-2" v-model="customer.mobile" placeholder="Enter Phone Number" required></b-form-input>
                    </b-form-group>
                
                    <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                        <b-form-input id="input-2" v-model="customer.email" placeholder="Enter Email" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                        <b-form-input id="input-2" v-model="customer.password" type="password" placeholder="Enter Password" required></b-form-input>
                    </b-form-group>
                    <br />
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>

                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ customer }}</pre>
                </b-card>
            </div>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'AddCustomer',
    data() {
      return {
        customer: {
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
        event.preventDefault()
        let apiUrl = "http://localhost:8081/api/banking/addCustomer"

        // Axios 
        axios.post(apiUrl, this.customer)
        .then(() => {
             this.$router.push("/customers")
             this.customer = {
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
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.customer.name = ''
        this.customer.address = ''
        this.customer.mobile = ''
        this.customer.email = ''
        this.customer.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>