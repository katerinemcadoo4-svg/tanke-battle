import React from 'react';
import { TRIGRAMS } from '../utils/plumBlossom';
import { TrigramSymbol } from '../components/TrigramSymbol';

const BaguaEncyclopedia = () => {
  const trigramEntries = Object.entries(TRIGRAMS);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">八卦百科全书</h1>
          <p className="text-amber-700 text-lg">探索八卦的奥秘与智慧</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trigramEntries.map(([key, trigram]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-red-800 mb-4">{trigram.name}</h2>
                <TrigramSymbol trigramKey={key} size={100} />
                <div className="text-6xl text-amber-700 my-4">{trigram.symbol}</div>
                <div className="text-center w-full space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-sm text-amber-600">五行属性</span>
                    <div className="text-xl font-bold text-red-700">{trigram.element}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-sm text-amber-600">先天数</span>
                    <div className="text-xl font-bold text-red-700">{trigram.number}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-sm text-amber-600">象征意义</span>
                    <div className="text-amber-800 leading-relaxed">{trigram.meaning}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-sm text-amber-600">二进制</span>
                    <div className="text-lg font-mono text-red-700">{trigram.binary}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 border-2 border-red-400 shadow-lg">
          <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">八卦的基本概念</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">阴阳爻</h3>
              <ul className="space-y-2 text-amber-800">
                <li>阳爻：代表天、刚、动、奇数、阳性</li>
                <li>阴爻：代表地、柔、静、偶数、阴性</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">八卦构成</h3>
              <ul className="space-y-2 text-amber-800">
                <li>每卦由三个爻组成</li>
                <li>八卦两两组合形成六十四卦</li>
                <li>上卦为外，下卦为内</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaguaEncyclopedia;
