import { LucideIcon } from "lucide-react";

export type Employee = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'RH' | 'Employee' | 'Manager';
  status: 'Active' | 'On Leave' | 'Inactive';
  salary: number;
  hireDate: string;
  avatarUrl: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  assignedMembers: Employee[];
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
};

export type Document = {
  id: string;
  name: string;
  type: 'PDF' | 'Word' | 'Spreadsheet' | 'Image';
  owner: string;
  uploadDate: string;
  access: ('Admin' | 'RH' | 'Manager' | 'Everyone')[];
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatarUrl: string;
  date: string;
};

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
  date: string;
  category: 'Salary' | 'Operations' | 'Marketing' | 'Revenue' | 'Other';
};

export type Notification = {
    id: string;
    title: string;
    description: string;
    date: string;
    read: boolean;
    icon: React.ElementType;
};

export type InternalMessage = {
  id: string;
  sender: {
    name: string;
    email: string;
    avatarUrl: string;
  };
  recipient: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
};

