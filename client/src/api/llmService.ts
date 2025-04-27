export async function fetchLLMResponse(query: string): Promise<string> {
    const response = await fetch('http://localhost:5000/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch LLM response');
    }
  
    const data = await response.json();
    return data.response;
  }