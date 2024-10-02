import fs from 'fs';

const multiplicationPrint = (number: number = 5) => {
  let result = `========================\n MULTIPLICATION TABLE ${number}\n========================\n`;

  for (let i = 1; i <= 10; i++) {
    result += `${i} x ${number} = ${i * number}\n`;
  }
  return {
    result,
    number,
  };
};

const saveResultIntoFile = ({
  result,
  number,
}: {
  result: string;
  number: number;
}) => {
  const outputPath = `outputs`;
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/${number}-multiplication-table.txt`, result);
  console.log(
    `File saved to ${process.cwd()}/outputs/${number}-multiplication-table.txt`
  );
};

saveResultIntoFile(multiplicationPrint(1));
