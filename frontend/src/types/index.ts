export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
  }
  
  export interface ModelOption {
    value: string;
    label: string;
  }
  
  export interface ModelType {
    value: string;
    label: string;
  }
  