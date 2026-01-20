
export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  isSolution?: boolean;
}

export interface PillarItem {
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
