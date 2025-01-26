import React from 'react';

export const parseMessageText = (text: string) => {
  const codeBlockRegex = /```([\s\S]*?)```/g;
  const parseFormattedText = (input: string) => {
    const parts = input.split(codeBlockRegex).map((part, index) => {
      if (index % 2 === 1) {
        return (
          <code
            key={index}
            className="bg-gray-200 dark:bg-gray-700 p-1 rounded text-sm font-mono block"
          >
            {part.trim()}
          </code>
        );
      }

      return part.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((subPart, subIndex) => {
        const inlineCodeMatch = subPart.match(/`([^`]+)`/);
        if (inlineCodeMatch) {
          return (
            <code
              key={subIndex}
              className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm font-mono"
            >
              {inlineCodeMatch[1]}
            </code>
          );
        }

        const boldMatch = subPart.match(/\*\*([^*]+)\*\*/);
        if (boldMatch) {
          return (
            <strong key={subIndex} className="font-bold">
              {boldMatch[1]}
            </strong>
          );
        }

        return subPart;
      });
    });

    return parts;
  };

  return parseFormattedText(text);
};
