import Status from "http-status-codes";
import RegistroMp from "../models/registroMp";

export const reporteMp = async (req, res) => {
  try {
    const data = await RegistroMp.find()
    return res.status(Status.OK).json({
      message: "reporte de registro de mp",
      data
    });
  } catch (error) {
    return res.status(Status.INTERNAL_SERVER_ERROR).json({
      message: error.message || error,
    });
  }
};

export const guardarRegistroMp = async (req, res) => {
  try {
    const {fecha_registro, nro_lote_mp, operario, orden_de_fabricacion, peso, producto} = req.body

    const fechaRegistro =  new Date(fecha_registro)
    const hora = fechaRegistro.getHours()
    const turno = hora < 19 && hora >=7 ? 1 : 2


    const registro = await RegistroMp.create({
      fechaRegistro: fecha_registro,
      turno,
      codigoOperario: operario, 
      ordenFabricacion: orden_de_fabricacion, 
      nroLoteMp: nro_lote_mp,
      peso,
      codigoProducto: producto
    })

    return res.status(Status.CREATED).json({
      message: "el registro de mp se guardó exitosamente",
      data: registro,
    });
  } catch (error) {
    return res.status(Status.INTERNAL_SERVER_ERROR).json({
      message: "error",
      error: error.message,
    });
  }
};
