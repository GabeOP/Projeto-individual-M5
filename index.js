import readLine from 'readline-sync';
import chalk from 'chalk';

const valores = [];
let input = "";

console.log(`${'\n'} -→ Ao terminar, digite ${chalk.bgRed('sair')} para gerar a sua lista ${'\n'}`)
while(input !== 'sair'){
    valores.push(input);
    input = readLine.question(chalk.bold.hex('#0B8DD6')("Digite uma propriedade CSS: "))
    .toLocaleLowerCase();
}

console.table(`${'\n'} ${chalk.bold('------Lista de propriedades CSS------')} ${chalk.bgHex('#5865D6')(valores.sort().join('\n• '))}`);