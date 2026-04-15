const Language = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img
        src="public/banners/language.webp"
        alt="Learn Korean"
        className="w-full h-60 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Learn Basic Korean (Beginner Guide)
        </h1>

        <p className="text-foreground mb-10 leading-relaxed">
          Korean (Hangul) is simple and logical. You can learn to read it quickly.
          Start with the alphabet, then use the phrases in real-life situations.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Korean Alphabet (Hangul)
          </h2>

          <h3 className="font-semibold mb-3">Basic Consonants</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-2">ㄱ (g/k)</td>
                  <td className="p-2">ㄴ (n)</td>
                  <td className="p-2">ㄷ (d/t)</td>
                  <td className="p-2">ㄹ (r/l)</td>
                </tr>
                <tr>
                  <td className="p-2">ㅁ (m)</td>
                  <td className="p-2">ㅂ (b/p)</td>
                  <td className="p-2">ㅅ (s)</td>
                  <td className="p-2">ㅇ (silent/ng)</td>
                </tr>
                <tr>
                  <td className="p-2">ㅈ (j)</td>
                  <td className="p-2">ㅊ (ch)</td>
                  <td className="p-2">ㅋ (k)</td>
                  <td className="p-2">ㅌ (t)</td>
                </tr>
                <tr>
                  <td className="p-2">ㅍ (p)</td>
                  <td className="p-2">ㅎ (h)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Double Consonants */}
          <h3 className="font-semibold mb-3">Double Consonants</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-2">ㄲ (kk)</td>
                  <td className="p-2">ㄸ (tt)</td>
                  <td className="p-2">ㅃ (pp)</td>
                  <td className="p-2">ㅆ (ss)</td>
                  <td className="p-2">ㅉ (jj)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Vowels */}
          <h3 className="font-semibold mb-3">Basic Vowels</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-2">ㅏ (a)</td>
                  <td className="p-2">ㅓ (eo)</td>
                  <td className="p-2">ㅗ (o)</td>
                  <td className="p-2">ㅜ (u)</td>
                </tr>
                <tr>
                  <td className="p-2">ㅡ (eu)</td>
                  <td className="p-2">ㅣ (i)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compound Vowels */}
          <h3 className="font-semibold mb-3">Compound Vowels</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-2">ㅐ (ae)</td>
                  <td className="p-2">ㅔ (e)</td>
                  <td className="p-2">ㅚ (oe)</td>
                  <td className="p-2">ㅟ (wi)</td>
                </tr>
                <tr>
                  <td className="p-2">ㅑ (ya)</td>
                  <td className="p-2">ㅕ (yeo)</td>
                  <td className="p-2">ㅛ (yo)</td>
                  <td className="p-2">ㅠ (yu)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Batchim */}
          <h3 className="font-semibold mb-3">Batchim (Final Consonants)</h3>
          <p className="text-sm text-foreground mb-4">
            Batchim is the final consonant in a syllable. It changes pronunciation slightly.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-2">ㄱ → k</td>
                  <td className="p-2">ㄴ → n</td>
                  <td className="p-2">ㄷ → t</td>
                  <td className="p-2">ㄹ → l</td>
                </tr>
                <tr>
                  <td className="p-2">ㅁ → m</td>
                  <td className="p-2">ㅂ → p</td>
                  <td className="p-2">ㅇ → ng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= READING ================= */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            How Reading Works
          </h2>

          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>가 = ㄱ + ㅏ (ga)</li>
            <li>나 = ㄴ + ㅏ (na)</li>
            <li>한 = ㅎ + ㅏ + ㄴ (han)</li>
          </ul>
        </section>

        {/* ================= PHRASES ================= */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Essential Phrases
          </h2>

          <div className="space-y-2 text-foreground">
            <p><b>Hello:</b> 안녕하세요</p>
            <p><b>Thank you:</b> 감사합니다</p>
            <p><b>Sorry:</b> 죄송합니다</p>
            <p><b>Yes / No:</b> 네 / 아니요</p>
            <p><b>Please:</b> 주세요</p>
            <p><b>Excuse me:</b> 저기요</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Daily Conversation
          </h2>

          <div className="space-y-2 text-foreground">
            <p>이름이 뭐예요? (What is your name?)</p>
            <p>저는 ___ 입니다 (My name is...)</p>
            <p>반갑습니다 (Nice to meet you)</p>
            <p>이해 못 해요 (I don’t understand)</p>
            <p>천천히 말해주세요 (Please speak slowly)</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Shopping & Food
          </h2>

          <div className="space-y-2 text-foreground">
            <p>이거 얼마예요? (How much?)</p>
            <p>이거 주세요 (I’ll take this)</p>
            <p>너무 비싸요 (Too expensive)</p>
            <p>물 주세요 (Water please)</p>
            <p>안 맵게 해주세요 (Not spicy)</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Transportation
          </h2>

          <div className="space-y-2 text-foreground">
            <p>역 어디예요? (Where is station?)</p>
            <p>어떻게 가요? (How to go?)</p>
            <p>여기서 내려주세요 (Stop here)</p>
            <p>표 한 장 주세요 (One ticket)</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Emergency
          </h2>

          <div className="space-y-2 text-foreground">
            <p>도와주세요! (Help!)</p>
            <p>경찰 불러주세요 (Call police)</p>
            <p>의사 필요해요 (Need doctor)</p>
            <p>길을 잃었어요 (I’m lost)</p>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Language;