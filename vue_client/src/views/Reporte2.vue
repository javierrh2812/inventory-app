<script setup>
import request from "../request";
import xlsx from "xlsx";
import { ref } from "vue";

let registros = ref([]);
let data = [];
request.get("registroPt/reporte").then(res => {
  registros.value = res.data;
  data = res.data;
});
const columns = [
  "Fecha de Registro",
  "Turno",
  "Codigo de Producto",
  "Orden de Fabricación",
  "Número de Lote Pt",
  "Peso",
];
const handleExport = () => {
  const aoaData = data.map(obj => {
    const arr = [
      obj.fechaRegistro,
      obj.turno,
      obj.codigoProducto,
      obj.ordenFabricacion,
      obj.nroLotePt,
      obj.peso,
    ];
    return arr;
  });

  const ws = xlsx.utils.aoa_to_sheet([columns, ...aoaData]);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "reporteMP");
  xlsx.writeFile(wb, "reportePT.xlsx");
};
</script>

<template>
  <div class="bg-gray-50">
    <button
      @click="handleExport"
      title="Exportar a excel"
      class="ml-16 bg-blue-600 p-2 rounded-md text-white"
    >
      Exportar
    </button>
    <div
      class="
        max-w-screen-xl
        px-4
        mx-auto
        sm:px-6
        lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <table v-if="registros.length > 0" class="table-fixed mt-8">
        <thead class="border-b-2 border-gray-800">
          <tr>
            <th v-for="column in columns" class="p-1 mr-1 text-left">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="registro in registros" class="even:bg-gray-400">
            <td>{{ new Date(registro.fechaRegistro).toLocaleDateString() }}</td>
            <td>{{ registro.turno }}</td>
            <td>{{ registro.codigoProducto }}</td>
            <td>{{ registro.ordenFabricacion }}</td>
            <td>{{ registro.nroLotePt }}</td>
            <td>{{ registro.peso }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
