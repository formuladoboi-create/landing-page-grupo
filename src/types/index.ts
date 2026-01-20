export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface FormData {
    nome: string;
    nomeFazenda: string;
    instagram: string;
    whatsapp: string;
    local: string;
    interesse: string;
}
