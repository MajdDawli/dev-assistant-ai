import { useState } from 'react';
import { fetchLLMResponse } from './api/llmService';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetchLLMResponse(query);
      setResponse(res);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error contacting server.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>AI Developer Assistant</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a dev question..."
          style={{ width: '300px', padding: '0.3rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Ask
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {response && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
