import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from 'lucide-react';

const AIDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const suggestions = [
    "Who is Elbara?",
    "Show me Elbara's CV.",
    "What are Elbara's skills?",
    "What projects has Elbara worked on?",
    "How can I contact Elbara?"
  ];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    setError("");
    // Simulate a delay
    setTimeout(() => {
      const fakeResponses = [
        "Elbara Mouaffak is an AI engineering student and full-stack developer passionate about building intelligent systems and sleek web apps.",
        "Elbara's CV includes experience in AI engineering, full-stack development, and building AI agents. He is skilled in React, Node.js, Python, and more.",
        "Elbara's skills include JavaScript, Python, React, Node.js, AI workflow automation, and more.",
        "Elbara has worked on projects such as a Hospital Management System, Invoice Management System, and AI Travel Agent.",
        "You can contact Elbara via email at elbaraemoueffek@gmail.com or on LinkedIn at https://www.linkedin.com/in/elbara-mouaffak-781655206/."
      ];
      // Always pick a relevant answer based on the prompt
      let answer = fakeResponses[0];
      if (prompt.toLowerCase().includes("cv") || prompt.toLowerCase().includes("resume") || prompt.toLowerCase().includes("curriculum vitae") || prompt.toLowerCase().includes("download")) {
        answer = fakeResponses[1] + "\n\nYou can download Elbara's CV here: [Download CV](/cv.pdf)";
      }
      else if (prompt.toLowerCase().includes("skill")) answer = fakeResponses[2];
      else if (prompt.toLowerCase().includes("project")) answer = fakeResponses[3];
      else if (prompt.toLowerCase().includes("contact")) answer = fakeResponses[4];
      else if (prompt.toLowerCase().includes("who")) answer = fakeResponses[0];
      setResponse(answer);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="ai-demo" className="py-16 sm:py-20 bg-slate-900 px-2 sm:px-4 md:px-8">
      <div className="container mx-auto px-0 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Demo
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
          <p className="text-base sm:text-lg text-gray-400 mt-4 sm:mt-6 max-w-xl mx-auto">
            Try asking a question or giving a prompt to a real Large Language Model!
          </p>
        </div>
        <div className="max-w-lg sm:max-w-2xl mx-auto w-full">
          <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm p-4 sm:p-6 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg sm:text-2xl text-white mb-2">Ask the AI</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSend} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <Input
                    type="text"
                    placeholder="Type your prompt..."
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/60 transition w-full text-base sm:text-lg"
                    disabled={loading}
                    required
                    aria-label="Prompt input"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 sm:px-6 py-2 flex items-center gap-2 animate-fade-in min-w-[90px] sm:min-w-[110px] text-base sm:text-lg"
                    disabled={loading || !prompt.trim()}
                    aria-label="Send prompt"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : <><Send className="w-5 h-5" /> <span className="hidden sm:inline">Send</span></>}
                  </Button>
                </div>
              </form>
              {/* Suggestions Bar */}
              <div className="flex flex-wrap gap-2 mt-4 mb-2 justify-center">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    className="px-3 sm:px-4 py-1.5 rounded-full bg-slate-700/80 text-gray-100 hover:bg-primary/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition text-xs sm:text-sm border border-slate-600 shadow-sm"
                    onClick={() => setPrompt(s)}
                    disabled={loading}
                    aria-label={`Use suggestion: ${s}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="mt-6 min-h-[80px] w-full">
                {loading && <div className="flex justify-center items-center h-16"><Loader2 className="w-7 h-7 animate-spin text-primary" /><span className="ml-3 text-primary">Thinking...</span></div>}
                {response && (
                  <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-3 sm:p-4 text-white whitespace-pre-line animate-fade-in mt-2 shadow-inner text-sm sm:text-base" 
                    dangerouslySetInnerHTML={{__html: response.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" download class="text-black hover:text-gray-700 underline font-semibold bg-white px-2 py-1 rounded">$1</a>')}}>
                  </div>
                )}
                {error && <div className="text-red-400 animate-fade-in mt-2 text-sm sm:text-base">{error}</div>}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">(This demo uses a simulated AI response. No API key or external service required.)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIDemo; 