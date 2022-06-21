
export interface ILancamentos {
    id?: number,
    isEntrada: boolean,
    isFixo?: boolean,
    tipo?: string, 
    data?: string, 
    valor?: number, 
    descricao?: string    
}