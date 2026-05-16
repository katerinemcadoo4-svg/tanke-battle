import React from 'react';
import { TRIGRAMS } from '../utils/plumBlossom';

const TrigramSymbol = ({ trigramKey, size = 60, className = '' }) => {
  const trigram = TRIGRAMS[trigramKey];
  const lines = trigram.binary.split('');
  const lineHeight = size / 6;
  const yangWidth = size * 0.8;
  const yinSegmentWidth = (yangWidth - size * 0.1) / 2;

  return (
    <svg width={size} height={size} className={className}>
      {lines.map((line, index) => {
        const y = index * lineHeight + lineHeight * 0.3;
        const x = (size - yangWidth) / 2;

        if (line === '1') {
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={yangWidth}
              height={lineHeight * 0.4}
              fill="#8B0000"
              rx={2}
            />
          );
        } else {
          return (
            <React.Fragment key={index}>
              <rect
                x={x}
                y={y}
                width={yinSegmentWidth}
                height={lineHeight * 0.4}
                fill="#8B0000"
                rx={2}
              />
              <rect
                x={x + yinSegmentWidth + size * 0.1}
                y={y}
                width={yinSegmentWidth}
                height={lineHeight * 0.4}
                fill="#8B0000"
                rx={2}
              />
            </React.Fragment>
          );
        }
      })}
    </svg>
  );
};

export { TrigramSymbol };
