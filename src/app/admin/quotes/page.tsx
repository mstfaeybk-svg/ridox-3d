'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Badge } from '@/components/Badge';
import { HiTrash, HiCheck, HiX } from 'react-icons/hi2';
import axios from 'axios';
import toast from 'react-hot-toast';

interface QuoteRequest {
  _id: string;
  customerName: string;
  customerEmail: string;
  material: string;
  quantity: number;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  estimatedCost?: number;
  createdAt: string;
}

export default function AdminQuotes() {
  const router = useRouter();
  const { token } = useAuthStore();
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchQuotes();
  }, [token, router]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('/api/admin/quotes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch quotes');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (quoteId: string, newStatus: string) => {
    try {
      await axios.patch(
        '/api/admin/quotes',
        {
          quoteId,
          status: newStatus,
          adminResponse: responseMessage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success('Quote updated successfully');
      setResponseMessage('');
      setSelectedQuote(null);
      fetchQuotes();
    } catch (error) {
      toast.error('Failed to update quote');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'secondary';
      case 'reviewed':
        return 'secondary';
      case 'approved':
        return 'primary';
      case 'rejected':
        return 'outline';
      default:
        return 'secondary';
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
          <h1 className="text-4xl font-bold mb-2">Quote Requests</h1>
          <p className="text-ridox-gray dark:text-gray-400">Manage incoming quote requests from clients</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List */}
          <div className="lg:col-span-2 space-y-4">
            {quotes.length === 0 ? (
              <Card>
                <p className="text-center text-ridox-gray dark:text-gray-400 py-8">No quotes yet</p>
              </Card>
            ) : (
              quotes.map((quote) => (
                <Card
                  key={quote._id}
                  hover
                  className="cursor-pointer"
                  onClick={() => setSelectedQuote(quote)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{quote.customerName}</h3>
                      <p className="text-sm text-ridox-gray dark:text-gray-400 mb-2">
                        {quote.customerEmail}
                      </p>
                      <p className="text-sm mb-3">
                        <span className="font-medium">{quote.material}</span> • {quote.quantity} units
                      </p>
                      <Badge variant={getStatusColor(quote.status)} size="sm">
                        {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg mb-2">
                        ${quote.estimatedCost?.toFixed(2) || '0.00'}
                      </p>
                      <p className="text-xs text-ridox-gray dark:text-gray-400">
                        {new Date(quote.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Detail Panel */}
          <div>
            {selectedQuote ? (
              <Card className="sticky top-24">
                <h3 className="text-lg font-bold mb-4">Response</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium block mb-2">Your Response</label>
                    <textarea
                      value={responseMessage}
                      onChange={(e) => setResponseMessage(e.target.value)}
                      className="w-full px-3 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark text-sm h-24 resize-none"
                      placeholder="Write your response message..."
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleStatusChange(selectedQuote._id, 'approved')}
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      <HiCheck className="w-4 h-4" /> Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(selectedQuote._id, 'rejected')}
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      <HiX className="w-4 h-4" /> Reject
                    </Button>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedQuote(null)}
                >
                  Close
                </Button>
              </Card>
            ) : (
              <Card>
                <p className="text-center text-ridox-gray dark:text-gray-400 py-8">
                  Select a quote to respond
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}