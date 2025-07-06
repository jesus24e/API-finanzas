import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    tipo: {
      type: String,
      required: true,
      enum: ["gasto", "ingreso"],
    },

    monto: {
      type: Number,
      required: true,
      min: [0, "el valor no puede ser negativo"],
    },

    descripcion: {
      type: String,
      required: false,
    },

    fecha: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Transaction",
  transactionSchema,
  "transaccionesTest"
);

// export default mongoose.model(
//   "transactions",
//   transactionSchema
// );