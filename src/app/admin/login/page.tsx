'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import toast from 'react-hot-toast';

interface LoginFormData {
  email: string;
  password: string;
}

export default function AdminLogin() {
  const router = useRouter();
  const { login } = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/admin/auth/login', data);
      
      if (response.data.success) {
        login(response.data.token, response.data.user);
        toast.success('Login successful!');
        router.push('/admin/dashboard');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ridox-white dark:bg-ridox-dark p-4">
      <Card className="w-full max-w-md">
        <div className="mb-8">
          <div className="flex items-center gap-2 font-display font-bold text-2xl mb-2">
            <div className="w-8 h-8 bg-ridox-green rounded-lg flex items-center justify-center text-ridox-white text-sm font-bold">
              R3
            </div>
            <span>Admin Dashboard</span>
          </div>
          <p className="text-ridox-gray dark:text-gray-400">Sign in to manage your projects</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
              placeholder="admin@ridox3d.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" isLoading={isLoading || isSubmitting} className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-ridox-gray dark:text-gray-400 mt-6">
          For security, only authorized admins can access this area.
        </p>
      </Card>
    </div>
  );
}