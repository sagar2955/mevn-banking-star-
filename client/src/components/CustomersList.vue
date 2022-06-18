<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" :key="customer.id">
                                <td>{{customer.name}}</td>
                                <td>{{customer.address}}</td>
                                <td>{{customer.mobile}}</td>
                                <td>{{customer.email}}</td>
                                <td>
                                    <b-button variant="success">
                                        <router-link
                                          :to="{name: 'EditCustomer', params: {id:customer.id}}"
                                        >Edit</router-link>
                                    </b-button>
                                    <b-button @click.prevent="deleteCustomer(customer.id)" variant="danger">Delete</b-button>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CustomerList',
    data() {
        return {
            customers: []
        }
    },
    created(){
         let apiUrl = "http://localhost:8081/api/banking/getAll"
         axios.get(apiUrl)
         .then((res) => {
            this.customers = res.data.data.customer
            console.log(res.data.data.customer)
         })
         .catch((error) => {
            console.log(error)
         }) 
    },
    methods:{
        deleteCustomer(id){
            console.log(id)
            let apiUrl = `http://localhost:8081/api/banking/deleteById/${id}`
            let indexOfCustomer = this.customers.findIndex((element) => element.id === id)
            axios.delete(apiUrl)
            .then(() => {
                this.customers.splice(indexOfCustomer, 1)
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        editCustomer(){
             this.$router.push("/editCustomer")
        }
    }
}
</script>