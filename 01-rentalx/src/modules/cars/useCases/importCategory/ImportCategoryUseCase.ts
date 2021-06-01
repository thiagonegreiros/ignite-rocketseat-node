import csvParse from "csv-parse";
import fs from "fs";

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    // ? Vai pegar o que ta sendo lido e coloca o que foi lido para algum lugar
    stream.pipe(parseFile);

    // ? Ele vai receber as nossas linhas
    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}
