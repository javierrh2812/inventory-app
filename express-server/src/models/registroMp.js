import mongoose from "mongoose";

export const schemaName = "registro_mp";
const registroMpSchema = new mongoose.Schema(
  {
    fechaRegistro: {type: String, required: true},
    turno: {type: Number, required:true, min:1, max:2},
    codigoOperario: {type: String, required:true },
    nombreOperario: {type: String, required:false, default: '' },
    ordenFabricacion: {type: Number, required:true},
    nroLoteMp: {type: Number, min:0, required:true},
    peso: {type: Number, required:true}
  },
  { versionKey: false, timestamps: false }
);

export default mongoose.model(schemaName, registroMpSchema);
