export interface IBGEUF {
    id: number;
    sigla: string;
    nome: string;
}

export interface IBGECity {
    id: number;
    nome: string;
}

export const getUFs = async (): Promise<IBGEUF[]> => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    return response.json();
};

export const getCitiesByUF = async (uf: string): Promise<IBGECity[]> => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    return response.json();
};
