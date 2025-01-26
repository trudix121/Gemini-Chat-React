import { ModelOption, ModelType } from "../types";

export const MODEL_OPTIONS: ModelOption[] = [
  { value: 'gemini-2.0-flash-exp', label: 'Gemini 2.0 Flash EXP' },  
  { value: 'gemini-2.0-flash-thinking-exp-01-21', label: 'Gemini 2.0 Flash' },
  { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' },
  { value: 'learnlm-1.5-pro-experimental', label: 'LearnLM 1.5 Pro' }
];

export const MODEL_TYPE: ModelType[] = [
  { value: 'default', label: 'Default' },
  { value: 'programmer', label: 'Programmer' },
  { value: 'writer', label: 'Writer' },
  { value: 'translator', label: 'Translator' },
  { value: 'conversationalist', label: 'Talker' },
  { value: 'explainer', label: 'Explainer'}
];
