export interface Alertas{
    id?: number;
    descricao: string;
    data: Date;
    prioridade: number;
    tipo: number;
    equipamento: number;
    infaestrutura: number;
}