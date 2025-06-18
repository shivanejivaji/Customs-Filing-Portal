import React from 'react';
import {
  Clock,
  CheckCircle,
  FileText,
  Info,
  Eye,
} from 'lucide-react';

const data = [
  {
    title: 'ABC Electronics Inc.',
    description: 'Electronic components from China',
    tracking: 'TRK-2024-001',
    value: '$25,000',
    estCompletion: '1/18/2024',
    submitted: '1/15/2024',
    status: 'pending',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: 'Global Textiles Ltd.',
    description: 'Cotton fabrics from India',
    tracking: 'TRK-2024-002',
    value: '$18,500',
    estCompletion: '1/17/2024',
    submitted: '1/14/2024',
    status: 'approved',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: 'Tech Solutions Corp.',
    description: 'Computer hardware from Taiwan',
    tracking: 'TRK-2024-003',
    value: '$42,000',
    estCompletion: '1/16/2024',
    submitted: '1/13/2024',
    status: 'in review',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: 'Fashion Forward LLC',
    description: 'Clothing items from Vietnam',
    tracking: 'TRK-2024-004',
    value: '$15,000',
    estCompletion: '1/15/2024',
    submitted: '1/12/2024',
    status: 'rejected',
    icon: <Info className="w-5 h-5" />,
  },
  {
    title: 'Industrial Parts Co.',
    description: 'Machinery parts from Germany',
    tracking: 'TRK-2024-005',
    value: '$35,000',
    estCompletion: '1/14/2024',
    submitted: '1/11/2024',
    status: 'approved',
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700',
  approved: 'bg-green-100 text-green-700',
  'in review': 'bg-blue-100 text-blue-700',
  rejected: 'bg-red-100 text-red-700',
};

export default function StatusList() {
  return (
    <div className="space-y-4 p-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-start bg-white p-4 rounded-lg shadow-sm border"
        >
          <div className="flex gap-3 items-start">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                Tracking: {item.tracking} &nbsp; Value: {item.value}
              </p>
            </div>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-700">
              Est. Completion: {item.estCompletion}
            </p>
            <p className="text-xs text-gray-500">
              Submitted: {item.submitted}
            </p>
            <div className="flex justify-end items-center gap-2 mt-1">
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
              <Eye className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
