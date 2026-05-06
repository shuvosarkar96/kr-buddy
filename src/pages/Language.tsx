const Language = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img
        src="/banners/language.webp"
        alt="Learn Korean"
        className="w-full h-60 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-black mb-4">
          Learn Basic Korean (Beginner Guide)
        </h1>

        <p className="text-gray-700 mb-10 leading-relaxed">
          Korean (Hangul) is simple and logical. You can learn to read it quickly.
          Start with the alphabet, then use the phrases in real-life situations.
        </p>

        {/* ================= ALPHABET ================= */}
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

          <h3 className="font-semibold mb-3">Batchim (Final Consonants)</h3>
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
          <h2 className="text-2xl font-semibold mb-4">How Reading Works</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Example</th>
                  <th className="p-3 text-left">Korean</th>
                  <th className="p-3 text-left">Pronunciation</th>
                  <th className="p-3 text-left">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Basic</td>
                  <td className="p-3">가</td>
                  <td className="p-3">ga</td>
                  <td className="p-3">ㄱ + ㅏ</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Basic</td>
                  <td className="p-3">나</td>
                  <td className="p-3">na</td>
                  <td className="p-3">ㄴ + ㅏ</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Final consonant</td>
                  <td className="p-3">한</td>
                  <td className="p-3">han</td>
                  <td className="p-3">ㅎ + ㅏ + ㄴ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= COMMON TABLE COMPONENT STYLE ================= */}
        {[
          {
            title: "Essential Phrases",
            data: [
              ["Hello", "안녕하세요", "annyeonghaseyo", "Greeting"],
              ["Thank you", "감사합니다", "gamsahamnida", "Thanks"],
              ["Sorry", "죄송합니다", "joesonghamnida", "Apology"],
              ["Yes", "네", "ne", "Yes"],
              ["No", "아니요", "aniyo", "No"],
            ],
          },
          {
            title: "Daily Conversation",
            data: [
              ["What is your name?", "이름이 뭐예요?", "ireumi mwoyeyo", "Ask name"],
              ["Nice to meet you", "반갑습니다", "bangapseumnida", "Greeting"],
              ["I don’t understand", "이해 못 해요", "ihae mot haeyo", "Confusion"],
            ],
          },
          {
            title: "Shopping & Food",
            data: [
              ["How much?", "이거 얼마예요?", "igeo eolmayeyo", "Price"],
              ["I’ll take this", "이거 주세요", "igeo juseyo", "Buy"],
              ["Too expensive", "너무 비싸요", "neomu bissayo", "Complaint"],
            ],
          },
          {
            title: "Transportation",
            data: [
              ["Where is station?", "역 어디예요?", "yeok eodiyeyo", "Location"],
              ["How to go?", "어떻게 가요?", "eotteoke gayo", "Direction"],
            ],
          },
          {
            title: "Emergency",
            data: [
              ["Help!", "도와주세요!", "dowajuseyo", "Emergency"],
              ["Call police", "경찰 불러주세요", "gyeongchal bulleojuseyo", "Help"],
            ],
          },
        ].map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">English</th>
                    <th className="p-3 text-left">Korean</th>
                    <th className="p-3 text-left">Pronunciation</th>
                    <th className="p-3 text-left">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {section.data.map((row, i) => (
                    <tr key={i} className="border-t">
                      {row.map((cell, j) => (
                        <td key={j} className="p-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

      </div>
    </div>
  );
};

export default Language;