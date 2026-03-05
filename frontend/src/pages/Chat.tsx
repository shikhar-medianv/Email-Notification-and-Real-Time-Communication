import React from 'react';

const Chat: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
    };

    return (
        <div className="glass-card" style={{ maxWidth: '800px' }}>
            <h1>Chat Room</h1>
            <p className="subtitle">Real-time chat functionality coming soon...</p>

            <div style={{ height: '300px', background: '#f8fafc', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifySelf: 'center', padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                This is where the real-time messages will appear once WebSockets are integrated.
            </div>

            <button className="btn-primary" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Chat;
