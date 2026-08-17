'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2>AI Assistant</h2>
      <div style={{ minHeight: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
        {messages.length === 0 && <p style={{ color: '#888' }}>Ask anything to begin...</p>}
        {messages.map((m) => (
          <div key={m.id} style={{ margin: '8px 0', padding: '8px 12px', borderRadius: '6px', background: m.role === 'user' ? '#e0f2fe' : '#f3f4f6' }}>
            <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          placeholder="Type a message..."
          onChange={handleInputChange}
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '6px', background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </main>
  );
}
