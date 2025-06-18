import React from 'react';
import { Clock, FileText, CheckCircle, Users, TrendingUp } from 'lucide-react';

const cards = [
  {
    title: 'Pending Filings',
    value: 3,
    description: 'Awaiting submission',
    icon: <Clock className="w-5 h-5 text-gray-500" />,
    valueColor: 'text-yellow-600',
  },
  {
    title: 'Awaiting Approval',
    value: 4,
    description: 'Under review',
    icon: <FileText className="w-5 h-5 text-gray-500" />,
    valueColor: 'text-blue-600',
  },
  {
    title: 'Completed Today',
    value: 12,
    description: (
      <span className="flex items-center gap-1">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span>+2 from yesterday</span>
      </span>
    ),
    icon: <CheckCircle className="w-5 h-5 text-gray-500" />,
    valueColor: 'text-green-600',
  },
  {
    title: 'Total Customers',
    value: 28,
    description: 'Active accounts',
    icon: <Users className="w-5 h-5 text-gray-500" />,
    valueColor: 'text-black',
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-sm p-4 border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-700">{card.title}</h3>
            {card.icon}
          </div>
          <div className={`text-2xl font-semibold ${card.valueColor}`}>
            {card.value}
          </div>
          <div className="text-sm text-gray-500 mt-1">{card.description}</div>
        </div>
      ))}
    </div>
  );
}
