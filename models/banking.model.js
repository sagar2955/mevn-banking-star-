const { mongoose } = require(".");

const bcript = require("bcrypt")
module.exports = mongoose => {
    var BankingSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        adress:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }

     },
     {timestamps: true}
     )
     BankingScheme.method("toJSON",function{
        const{_id,...object} = this.toObject()
        object.id = _id
        return object
     })
     BankingScheme.pre('save', function(next){
        const saltRound = 10
        this.password = bcrypt.hashSync(this.password, saltRound)
        next()
        
     })
    const BankingCustomerModel = mongoose.model("customer",BankingScheme)
    return BankingCustomerModel
}