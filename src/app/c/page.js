'use client'

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

let socket;

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // اتصال به وب‌سوکت سرور NestJS
        socket = io(process.env.NEXT_PUBLIC_BASE_URL);

        socket.on('connect', () => {
            console.log('Connected:', socket.id);
        });

        socket.on('message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() === '') return;
        socket.emit('message', { user: 'کاربر', text: message });
        setMessage('');
    };

    return (
        <div className="w-full">
            <h1>چت روم زنده</h1>
            <div
                style={{
                    border: '1px solid #ccc',
                    height: 300,
                    overflowY: 'scroll',
                    padding: 10,
                    marginBottom: 10,
                }}
            >
                {messages.map((m, i) => (
                    <div key={i}>
                        <strong>{m.user}:</strong> {m.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') sendMessage(); // 👈 اینجا Enter رو چک می‌کنیم
                }}
                placeholder="پیام خود را وارد کنید..."
                style={{ width: '80%', padding: 8 }}
            />
            <button onClick={sendMessage} style={{ padding: '8px 12px', marginLeft: 10 }}>
                ارسال
            </button>
        </div>
    );
}
