import multer from "multer"; // importar instalação do multer
import { extname, resolve } from "path"; // importar ath para utilziar os diretórios

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Arquivo precisa ser .png ou .jpg"));
    }

    return cb(null, true);
  },
  // Confgiruação para utilizar o armazenamento do servidor
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Define o destino aonde o arquivo será enviado
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      // Trata o nome do arquivo para evitar duplicidade
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // Data e milisegundos + aleatório + extensão original do arquivo
    },
  }),
};
