import mongoose, { Schema, Document } from 'mongoose';

interface IAdminUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'moderator';
  createdAt: Date;
  lastLogin?: Date;
}

const adminUserSchema = new Schema<IAdminUser>(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    role: {
      type: String,
      enum: ['admin', 'moderator'],
      default: 'moderator',
    },
    lastLogin: Date,
  },
  { timestamps: true }
);

const AdminUser = mongoose.models.AdminUser || mongoose.model<IAdminUser>('AdminUser', adminUserSchema);

export default AdminUser;
export type { IAdminUser };