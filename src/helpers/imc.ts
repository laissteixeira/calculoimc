export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number []
    yourImc?: number;
}

export const levels: Level [] = [
    {title: 'Magreza', color:'#ff0048', icon: 'down', imc: [0, 18.5]},
    {title: 'Normal', color:'#4aff59', icon: 'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso', color:'#f7a943', icon: 'down', imc: [25, 30]},
    {title: 'Obesidade', color:'#ff0048', icon: 'down', imc: [30.1, 99]},
];


export const calculateImc = (altura:number, peso:number) => {
    const imc = peso / (altura * altura);

    for ( let i in levels) {
        if (imc >= levels[i].imc[0] && imc<= levels[i].imc[1]) {
            levels[i].yourImc = imc;
            return levels[i]

        }
    }
    return null;
}