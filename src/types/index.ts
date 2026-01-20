export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface FormData {
    nome: string;
    nomeFazenda: string;
    whatsapp: string;
    local: string;
    interesse: string;
}
