import Status from "http-status-codes";
import RegistroPt from "../models/registroPt";

export const reportePt= async (_, res) => {
  try {
    const data = await RegistroPt.find()
    return res.status(Status.OK).json({
      message: "reporte de registro de pp",
      data
    });
  } catch (error) {
    return res.status(Status.INTERNAL_SERVER_ERROR).json({
      message: error.message || error,
    });
  }
};

export const guardarRegistroPt= async (req, res) => {
  try {
    const {fecha_registro, nro_lote_pt, orden_de_fabricacion, peso, producto} = req.body

    const fechaRegistro =  new Date(fecha_registro)
    const hora = fechaRegistro.getHours()
    const turno = hora < 19 && hora >=7 ? 1 : 2


    const registro = await RegistroPt.create({
      fechaRegistro: fecha_registro,
      turno,
      ordenFabricacion: orden_de_fabricacion, 
      nroLotePt: nro_lote_pt,
      peso,
      codigoProducto: producto
    })

    return res.status(Status.CREATED).json({
      message: "el registro de pt se guardó exitosamente",
      data: registro,
    });
  } catch (error) {
    return res.status(Status.INTERNAL_SERVER_ERROR).json({
      message: "error",
      error: error.message,
    });
  }
};
