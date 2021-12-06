import mongoose from "mongoose";

export const schemaName = "registro_pt";
const registroMpSchema = new mongoose.Schema(
  {
    fechaRegistro: {type: String, required: true},
    turno: {type: Number, required:true, min:1, max:2},
    ordenFabricacion: {type: Number, required:true},
    nroLotePt: {type: Number, min:0, required:true},
    codigoProducto: {type: String, required: true, default: ''},
    peso: {type: Number, required:true}
  },
  { versionKey: false, timestamps: false }
);

export default mongoose.model(schemaName, registroMpSchema);
