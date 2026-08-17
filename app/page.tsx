'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main style={{ maxWidth: '640px', margin: '40px auto', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '0 16px' }}>
      <header style={{ marginBottom: '24px', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>AI Assistant</h1>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>Powered by AI SDK on Cloudflare</p>
      </header>

      <div style={{ minHeight: '350px', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', marginBottom: '20px', background: '#fafafa' }}>
        {messages.length === 0 && (
          <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '40px' }}>Type a message below to start chatting...</p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              margin: '10px 0',
              padding: '10px 14px',
              borderRadius: '8px',
              maxWidth: '85%',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
              background: m.role === 'user' ? '#2563eb' : '#ffffff',
              color: m.role === 'user' ? '#ffffff' : '#1f2937',
              marginLeft: m.role === 'user' ? 'auto' : '0',
              boxShadow: m.role === 'user' ? 'none' : '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '4px', opacity: 0.8 }}>
              {m.role === 'user' ? 'You' : 'Assistant'}
            </div>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          value={input}
          placeholder="Ask a question..."
          onChange={handleInputChange}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '15px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            background: '#2563eb',
            color: '#ffffff',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </main>
  );
}
