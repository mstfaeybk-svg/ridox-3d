'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { HiTrash, HiPencil } from 'react-icons/hi2';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminMessages() {
  const router = useRouter();
  const { token } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchMessages();
  }, [token, router]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/admin/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (messageId: string) => {
    try {
      await axios.patch(
        '/api/admin/messages',
        { messageId, read: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchMessages();
    } catch (error) {
      toast.error('Failed to update message');
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      await axios.delete('/api/admin/messages', {
        data: { messageId },
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Message deleted');
      setSelectedMessage(null);
      fetchMessages();
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-ridox-white dark:bg-ridox-dark">
      <Header />

      <main className="container py-12">
        <AnimatedSection className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Messages</h1>
          <p className="text-ridox-gray dark:text-gray-400">
            {messages.filter((m) => !m.read).length} unread messages
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List */}
          <div className="lg:col-span-2 space-y-4">
            {messages.length === 0 ? (
              <Card>
                <p className="text-center text-ridox-gray dark:text-gray-400 py-8">No messages yet</p>
              </Card>
            ) : (
              messages.map((message) => (
                <Card
                  key={message._id}
                  hover
                  className={`cursor-pointer ${
                    !message.read ? 'border-ridox-green' : ''
                  }`}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.read) handleMarkAsRead(message._id);
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{message.name}</h3>
                        {!message.read && (
                          <span className="w-2 h-2 bg-ridox-green rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-ridox-gray dark:text-gray-400 mb-2">
                        {message.email}
                      </p>
                      <p className="font-medium text-sm mb-1">{message.subject}</p>
                      <p className="text-sm text-ridox-gray dark:text-gray-400 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                    <p className="text-xs text-ridox-gray dark:text-gray-400 ml-4 flex-shrink-0">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Detail Panel */}
          <div>
            {selectedMessage ? (
              <Card className="sticky top-24">
                <h3 className="text-lg font-bold mb-4">Message Details</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-ridox-gray dark:text-gray-400 uppercase tracking-wide">From</p>
                    <p className="font-medium">{selectedMessage.name}</p>
                    <p className="text-sm text-ridox-gray dark:text-gray-400">{selectedMessage.email}</p>
                  </div>

                  <div>
                    <p className="text-xs text-ridox-gray dark:text-gray-400 uppercase tracking-wide mb-1">Subject</p>
                    <p className="font-medium">{selectedMessage.subject}</p>
                  </div>

                  <div>
                    <p className="text-xs text-ridox-gray dark:text-gray-400 uppercase tracking-wide mb-1">Message</p>
                    <p className="text-sm whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>

                  <div>
                    <p className="text-xs text-ridox-gray dark:text-gray-400">
                      {new Date(selectedMessage.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(selectedMessage._id)}
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <HiTrash className="w-4 h-4" /> Delete
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedMessage(null)}
                  >
                    Close
                  </Button>
                </div>
              </Card>
            ) : (
              <Card>
                <p className="text-center text-ridox-gray dark:text-gray-400 py-8">
                  Select a message to view
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}