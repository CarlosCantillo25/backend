import {Schema, model, Types} from "mongoose"

let colecction = "categories"
let schema = new Schema({
    name:{type:String, require:true},
    color:{type:String, require:true},
    hover:{type:String, require:true},
    description:{type:String, require:true},
    cover_photo:{type:String, require:true},
    character_photo:{type:String, require:true},
    admin_id:{type:Types.ObjectId, ref:"users" , require:true },
}, {
    timestamps:true
})

const Category = model(colecction, schema)
export default Category