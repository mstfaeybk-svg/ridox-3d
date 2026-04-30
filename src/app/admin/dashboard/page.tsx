'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { HiDocumentText, HiExclamationTriangle, HiEnvelope, HiChartBar } from 'react-icons/hi2';
import axios from 'axios';

interface DashboardStats {
  totalQuotes: number;
  totalMessages: number;
  pendingQuotes: number;
  conversionRate: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { token, user } = useAuthStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/admin/analytics', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(response.data.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ridox-white dark:bg-ridox-dark">
      <Header />

      <main className="container py-12">
        {/* Welcome */}
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-ridox-gray dark:text-gray-400">Here's what's happening with your business today.</p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Quotes */}
          <AnimatedSection delay={0}>
            <Card>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-ridox-gray dark:text-gray-400 text-sm font-medium mb-1">Total Quotes</p>
                  <p className="text-4xl font-bold text-ridox-green">{stats?.totalQuotes || 0}</p>
                </div>
                <div className="w-12 h-12 bg-ridox-green/10 rounded-lg flex items-center justify-center">
                  <HiDocumentText className="w-6 h-6 text-ridox-green" />
                </div>
              </div>
              <p className="text-xs text-ridox-gray dark:text-gray-400 mt-4">All quote requests</p>
            </Card>
          </AnimatedSection>

          {/* Pending Quotes */}
          <AnimatedSection delay={0.1}>
            <Card>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-ridox-gray dark:text-gray-400 text-sm font-medium mb-1">Pending Quotes</p>
                  <p className="text-4xl font-bold text-yellow-500">{stats?.pendingQuotes || 0}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <HiExclamationTriangle className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <p className="text-xs text-ridox-gray dark:text-gray-400 mt-4">Awaiting response</p>
            </Card>
          </AnimatedSection>

          {/* Total Messages */}
          <AnimatedSection delay={0.2}>
            <Card>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-ridox-gray dark:text-gray-400 text-sm font-medium mb-1">Messages</p>
                  <p className="text-4xl font-bold text-blue-500">{stats?.totalMessages || 0}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <HiEnvelope className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <p className="text-xs text-ridox-gray dark:text-gray-400 mt-4">Contact form submissions</p>
            </Card>
          </AnimatedSection>

          {/* Conversion Rate */}
          <AnimatedSection delay={0.3}>
            <Card>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-ridox-gray dark:text-gray-400 text-sm font-medium mb-1">Conversion Rate</p>
                  <p className="text-4xl font-bold text-purple-500">{(stats?.conversionRate || 0).toFixed(1)}%</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <HiChartBar className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <p className="text-xs text-ridox-gray dark:text-gray-400 mt-4">Quote to conversion</p>
            </Card>
          </AnimatedSection>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quote Requests */}
          <AnimatedSection delay={0.4}>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Quote Requests</h3>
              <p className="text-ridox-gray dark:text-gray-400 text-sm mb-6">
                Manage incoming quote requests and respond to clients.
              </p>
              <Button variant="secondary" size="sm">
                View Quotes
              </Button>
            </Card>
          </AnimatedSection>

          {/* Messages */}
          <AnimatedSection delay={0.5}>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Messages</h3>
              <p className="text-ridox-gray dark:text-gray-400 text-sm mb-6">
                Read and respond to contact form messages.
              </p>
              <Button variant="secondary" size="sm">
                View Messages
              </Button>
            </Card>
          </AnimatedSection>

          {/* Portfolio */}
          <AnimatedSection delay={0.6}>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <p className="text-ridox-gray dark:text-gray-400 text-sm mb-6">
                Add, edit, or delete projects in your portfolio.
              </p>
              <Button variant="secondary" size="sm">
                Manage Portfolio
              </Button>
            </Card>
          </AnimatedSection>

          {/* Blog */}
          <AnimatedSection delay={0.7}>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Blog Posts</h3>
              <p className="text-ridox-gray dark:text-gray-400 text-sm mb-6">
                Create, edit, or publish blog articles.
              </p>
              <Button variant="secondary" size="sm">
                Manage Blog
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}