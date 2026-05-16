import React, { useState } from 'react';
import { generateHexagram, generateInterpretation } from '../utils/plumBlossom';
import { HexagramDisplay } from '../components/HexagramDisplay';
import { TrigramSymbol } from '../components/TrigramSymbol';

const Home = () => {
  const [result, setResult] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  const handleCast = () => {
    const hexagramResult = generateHexagram();
    setResult(hexagramResult);
    setInterpretation(generateInterpretation(hexagramResult));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">梅花易数起卦系统</h1>
          <p className="text-amber-700 text-lg">心念至诚，叩问天地玄机</p>
        </header>

        <div className="flex justify-center mb-12">
          <button
            onClick={handleCast}
            className="px-12 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white text-xl font-bold rounded-xl shadow-lg hover:from-red-800 hover:to-red-900 transform hover:scale-105 transition-all duration-300 border-2 border-red-600"
          >
            起卦问事
          </button>
        </div>

        {result && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HexagramDisplay
                upperTrigram={result.original.upperTrigram}
                lowerTrigram={result.original.lowerTrigram}
                name={result.original.name}
                title="本卦"
                changingLines={result.changingLines}
              />
              <HexagramDisplay
                upperTrigram={result.changed.upperTrigram}
                lowerTrigram={result.changed.lowerTrigram}
                name={result.changed.name}
                title="变卦"
              />
              <HexagramDisplay
                upperTrigram={result.mutual.upperTrigram}
                lowerTrigram={result.mutual.lowerTrigram}
                name="互卦"
                title="互卦"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-400 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">卦辞</h3>
                <p className="text-xl text-amber-800 leading-relaxed">{result.original.judgement}</p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-6 border-2 border-red-400 shadow-lg">
                <h3 className="text-2xl font-bold text-red-900 mb-4">现代解读</h3>
                <p className="text-lg text-red-800 leading-relaxed">{interpretation}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">爻辞详解</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {result.original.lines.map((line, index) => {
                  const isChanging = result.changingLines.includes(index);
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 ${
                        isChanging ? 'bg-red-100 border-red-400 shadow-md' : 'bg-amber-50 border-amber-300'
                      }`}
                    >
                      <div className={`font-bold mb-2 ${isChanging ? 'text-red-800' : 'text-amber-800'}`}>
                        {isChanging ? '★ ' : ''}{index + 1}爻
                      </div>
                      <p className={`text-sm ${isChanging ? 'text-red-700' : 'text-amber-700'}`}>{line}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {!result && (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-xl border-2 border-amber-200">
              <TrigramSymbol trigramKey="qian" size={120} />
              <p className="mt-6 text-amber-700 text-lg">点击上方按钮开始起卦</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
