export type AppMode = 
  | 'screen'
  | 'live-audio'
  | 'chatbot'
  | 'media';

export interface Message {
  role: 'user' | 'assistant';
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  isThinking?: boolean;
}

export interface StrategicHint {
  message: string;
  rationale: string;
  targetRow?: number;
  targetCol?: number;
  recommendedColor?: string;
}

export interface DebugInfo {
  latency: number;
  screenshotBase64: string;
  promptContext: string;
  rawResponse: string;
  timestamp: string;
  parsedResponse?: any;
  error?: string;
}

export interface AiResponse {
  hint: StrategicHint;
  debug: DebugInfo;
}
