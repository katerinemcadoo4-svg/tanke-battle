import React from 'react';
import { TRIGRAMS } from '../utils/plumBlossom';
import { TrigramSymbol } from './TrigramSymbol';

const HexagramDisplay = ({ 
  upperTrigram, 
  lowerTrigram, 
  name, 
  title,
  changingLines = [] 
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 shadow-lg">
      <h3 className="text-xl font-bold text-amber-900 mb-4">{title}</h3>
      <div className="flex flex-col items-center">
        <div className="text-center mb-2">
          <span className="text-sm text-amber-700">{TRIGRAMS[upperTrigram].element}</span>
          <TrigramSymbol trigramKey={upperTrigram} size={80} />
          <span className="text-lg font-bold text-amber-800">{TRIGRAMS[upperTrigram].name}</span>
        </div>
        <div className="w-16 h-0.5 bg-amber-400 my-2" />
        <div className="text-center mt-2">
          <span className="text-sm text-amber-700">{TRIGRAMS[lowerTrigram].element}</span>
          <TrigramSymbol trigramKey={lowerTrigram} size={80} />
          <span className="text-lg font-bold text-amber-800">{TRIGRAMS[lowerTrigram].name}</span>
        </div>
      </div>
      <h4 className="text-2xl font-bold text-red-800 mt-4">{name}</h4>
      {changingLines.length > 0 && (
        <div className="mt-2 text-sm text-amber-700">
          变爻: {changingLines.map(i => i + 1).join(', ')}
        </div>
      )}
    </div>
  );
};

export { HexagramDisplay };
