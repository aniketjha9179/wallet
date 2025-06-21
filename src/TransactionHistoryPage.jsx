import Logo from '/reapzo.png'
import TransactionLogo from '/Png logo.png'
import React, { useState } from "react";
import { ArrowLeft, Copy, Check, X, CreditCard, TrendingUp, TrendingDown, FileText, AlertCircle, Clock, XCircle, CheckCircle } from "lucide-react";

const TransactionHistoryPage = () => {
  const [activeMainTab, setActiveMainTab] = useState('deposits');
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [copiedFields, setCopiedFields] = useState({});

  const mainTabs = [
    { id: 'all-events', label: 'All Events', icon: <FileText className="w-4 h-4" />, color: 'slate' },
    { id: 'deposits', label: 'Deposits', icon: <TrendingUp className="w-4 h-4" />, color: 'emerald' },
    { id: 'withdraw', label: 'Withdraw', icon: <TrendingDown className="w-4 h-4" />, color: 'red' },
    { id: 'tds', label: 'TDS', icon: <AlertCircle className="w-4 h-4" />, color: 'amber' },
    { id: 'others', label: 'Others', icon: <FileText className="w-4 h-4" />, color: 'purple' }
  ];

  const subTabs = [
    { id: 'all', label: 'All', count: 4 },
    { id: 'success', label: 'Success', count: 2 },
    { id: 'in-process', label: 'In Process', count: 1 },
    { id: 'failed', label: 'Failed', count: 1 }
  ];

  const transactions = [
    {
      id: 1,
      type: 'deposit',
      status: 'success',
      amount: 1000,
      date: '2024-06-20',
      time: '14:30',
      upiId: 'user@paytm',
      transactionId: 'TXN20240620143001',
      depositAmount: 781.25,
      govTax: 218.75,
      discountPoints: 218.75,
      method: 'UPI'
    },
    {
      id: 2,
      type: 'deposit',
      status: 'success',
      amount: 500,
      date: '2024-06-19',
      time: '10:15',
      upiId: 'user@gpay',
      transactionId: 'TXN20240619101502',
      depositAmount: 390.63,
      govTax: 109.37,
      discountPoints: 109.37,
      method: 'UPI'
    },
    {
      id: 3,
      type: 'deposit',
      status: 'in-process',
      amount: 750,
      date: '2024-06-20',
      time: '16:45',
      upiId: 'user@phonepe',
      transactionId: 'TXN20240620164503',
      depositAmount: 585.94,
      govTax: 164.06,
      discountPoints: 164.06,
      method: 'UPI'
    },
    {
      id: 4,
      type: 'deposit',
      status: 'failed',
      amount: 300,
      date: '2024-06-18',
      time: '20:30',
      upiId: 'user@paytm',
      transactionId: 'TXN20240618203004',
      depositAmount: 234.38,
      govTax: 65.62,
      discountPoints: 65.62,
      method: 'UPI',
      failureReason: 'Insufficient funds in account'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (activeMainTab !== 'deposits' && activeMainTab !== 'all-events') return false;
    if (activeSubTab === 'all') return true;
    return transaction.status === activeSubTab;
  });

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFields({ ...copiedFields, [field]: true });
      setTimeout(() => {
        setCopiedFields({ ...copiedFields, [field]: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
    setCopiedFields({});
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
    setCopiedFields({});
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'in-process': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'failed': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'in-process': return <Clock className="w-4 h-4" />;
      case 'failed': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'success': return 'Success';
      case 'in-process': return 'In Process';
      case 'failed': return 'Failed';
      default: return 'Unknown';
    }
  };

  const getModalHeaderColor = (status) => {
    switch (status) {
      case 'success': return 'bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-200 border-b border-emerald-200/50';
      case 'in-process': return 'bg-gradient-to-r from-amber-50 via-amber-100 to-amber-200 border-b border-amber-200/50';
      case 'failed': return 'bg-gradient-to-r from-red-50 via-red-100 to-red-200 border-b border-red-200/50';
      default: return 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 border-b border-slate-200/50';
    }
  };

  const getMainTabStyle = (tab, isActive) => {
    const colorClasses = {
      slate: isActive ? 'bg-slate-100 text-slate-800 border-slate-500' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800',
      emerald: isActive ? 'bg-emerald-100 text-emerald-800 border-emerald-500' : 'text-emerald-600 hover:bg-emerald-50 hover:text-emerald-800',
      red: isActive ? 'bg-red-100 text-red-800 border-red-500' : 'text-red-600 hover:bg-red-50 hover:text-red-800',
      amber: isActive ? 'bg-amber-100 text-amber-800 border-amber-500' : 'text-amber-600 hover:bg-amber-50 hover:text-amber-800',
      purple: isActive ? 'bg-purple-100 text-purple-800 border-purple-500' : 'text-purple-600 hover:bg-purple-50 hover:text-purple-800'
    };
    
    return `flex items-center gap-2 px-3 py-3 mx-1 rounded-xl font-medium text-sm transition-all duration-200 border-b-2 touch-manipulation min-h-[48px] ${
      isActive ? `${colorClasses[tab.color]} shadow-sm` : `border-transparent ${colorClasses[tab.color]}`
    }`;
  };

  const getSubTabStyle = (tab, isActive) => {
    return `relative px-4 py-3 mx-1 rounded-xl font-medium text-sm transition-all duration-200 touch-manipulation min-h-[48px] flex items-center ${
      isActive 
        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
    }`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex justify-center items-center px-4 py-3">
          <div className="bg-white flex justify-center items-center border-b border-gray-200">
            <div className="flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img src={Logo} className="h-8 w-20 object-contain" alt="Logo" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center px-4 py-4 min-h-[60px]">
        <ArrowLeft className="w-6 h-6 mr-3" />
        <h1 className="text-xl font-semibold">Transaction History</h1>
      </div>

      {/* Main Tabs - Mobile Optimized */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="flex overflow-x-auto scrollbar-hide px-2 py-2 gap-1">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMainTab(tab.id)}
              className={getMainTabStyle(tab, activeMainTab === tab.id)}
            >
              <div className={`p-1.5 rounded-lg ${activeMainTab === tab.id ? 'bg-white/50' : ''}`}>
                {tab.icon}
              </div>
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub Tabs - Mobile Optimized */}
      {activeMainTab === 'deposits' && (
        <div className="bg-white/50 backdrop-blur-sm border-b border-gray-200/30">
          <div className="flex overflow-x-auto scrollbar-hide px-2 py-2 gap-1">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={getSubTabStyle(tab, activeSubTab === tab.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap">{tab.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeSubTab === tab.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Transaction List - Mobile Optimized */}
      <div className="px-3 py-4 space-y-3 pb-6">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-500 text-lg font-medium">No transactions found</p>
            <p className="text-gray-400 text-sm mt-1">Try selecting a different filter</p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => openModal(transaction)}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 cursor-pointer active:bg-white active:scale-[0.98] transition-all duration-200 touch-manipulation"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-xs truncate">Deposit via {transaction.method}</p>
                    <p className="text-xs text-gray-600 font-medium">
                      {transaction.date} • {transaction.time}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-1 rounded-md inline-block max-w-full truncate">
                      ID: {transaction.transactionId}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-gray-900 text-xs mb-2">₹{transaction.amount}</p>
                  <span className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(transaction.status)}`}>
                    {getStatusIcon(transaction.status)}
                    <span className="hidden sm:inline">{getStatusText(transaction.status)}</span>
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Enhanced Modal - Mobile Optimized */}
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md sm:w-full max-h-[95vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className={`${getModalHeaderColor(selectedTransaction.status)} text-gray-800 p-4 rounded-t-3xl flex-shrink-0`}>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                      <img src={TransactionLogo} className="h-6 w-16 object-contain" alt="Transaction Logo" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xs font-bold">Transaction Details</h2>
                    <p className="text-xs opacity-80">{getStatusText(selectedTransaction.status)}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-3 hover:bg-black/10 rounded-full transition-colors touch-manipulation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">₹{selectedTransaction.amount}</p>
                <p className="text-xs opacity-90">{selectedTransaction.date} • {selectedTransaction.time}</p>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Status Messages */}
              {selectedTransaction.status === 'failed' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-800 text-base">Transaction Failed</span>
                  </div>
                  <p className="text-sm text-red-700">
                    {selectedTransaction.failureReason || 'The transaction could not be completed.'}
                  </p>
                </div>
              )}

              {selectedTransaction.status === 'in-process' && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-amber-800 text-base">Processing Transaction</span>
                  </div>
                  <p className="text-sm text-amber-700">
                    Your transaction is being processed. This may take a few minutes.
                  </p>
                </div>
              )}

              {selectedTransaction.status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-2 text-center">
                  <p className="text-xs text-green-700 font-medium">
                    Your deposit has been processed successfully.
                  </p>
                </div>
              )}

              {/* Transaction Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-4 text-base">Transaction Information</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-600 text-sm">From UPI ID</span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold bg-white px-3 py-2 rounded-lg text-sm flex-1 truncate">
                        {selectedTransaction.upiId}
                      </span>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.upiId, 'upiId')}
                        className="p-2 hover:bg-white rounded-lg transition-colors touch-manipulation flex-shrink-0"
                      >
                        {copiedFields.upiId ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-gray-600 text-sm">Transaction ID</span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold bg-white px-3 py-2 rounded-lg text-sm flex-1 truncate">
                        {selectedTransaction.transactionId}
                      </span>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.transactionId, 'transactionId')}
                        className="p-2 hover:bg-white rounded-lg transition-colors touch-manipulation flex-shrink-0"
                      >
                        {copiedFields.transactionId ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 rounded-b-3xl flex-shrink-0 pb-6 sm:pb-4">
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base touch-manipulation"
              >
                Got it, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistoryPage;