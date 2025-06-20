import React, { useState } from "react";
import { ArrowLeft, Copy, Check, X, ChevronRight, Calendar, CreditCard, Download, TrendingUp, TrendingDown, FileText, AlertCircle, Clock, XCircle, CheckCircle } from "lucide-react";
import Logo from '/reapzo.png'
import TransactionLogo from '/Png logo.png'
const TransactionHistoryPage = () => {
  const [activeMainTab, setActiveMainTab] = useState('deposits');
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [copiedFields, setCopiedFields] = useState({});

  const mainTabs = [
    { id: 'all-events', label: 'All Events', icon: <FileText className="w-4 h-4" /> },
    { id: 'deposits', label: 'Deposits', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'withdraw', label: 'Withdraw', icon: <TrendingDown className="w-4 h-4" /> },
    { id: 'tds', label: 'TDS', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'others', label: 'Others', icon: <FileText className="w-4 h-4" /> }
  ];

  const subTabs = [
    { id: 'all', label: 'All' },
    { id: 'success', label: 'Success' },
    { id: 'in-process', label: 'In Process' },
    { id: 'failed', label: 'Failed' }
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
      case 'success': return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'in-process': return 'bg-gradient-to-r from-amber-500 to-amber-600';
      case 'failed': return 'bg-gradient-to-r from-red-500 to-red-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex justify-center items-center  px-4">
          <div className="bg-white py-3 flex justify-center items-center border-b border-gray-200">
            <div className="h-6 w-16  rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                   <img src={Logo} className="h-6 w-16 object-contain" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center px-4 py-4">
        <ArrowLeft className="w-5 h-5 mr-3" />
        <h1 className="text-lg font-semibold">Transaction History</h1>
      </div>

      {/* Main Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMainTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeMainTab === tab.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub Tabs (only show for deposits) */}
      {activeMainTab === 'deposits' && (
        <div className="bg-white border-b border-gray-200">
          <div className="flex overflow-x-auto scrollbar-hide px-4">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                  activeSubTab === tab.id
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Transaction List */}
      <div className="px-4 py-4 space-y-3">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No transactions found</p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => openModal(transaction)}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transform hover:scale-[1.01] transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Deposit via {transaction.method}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} • {transaction.time}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      ID: {transaction.transactionId}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">₹{transaction.amount}</p>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(transaction.status)}`}>
                    {getStatusIcon(transaction.status)}
                    {getStatusText(transaction.status)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Enhanced Modal */}
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 bg-white/80 bg-opacity-50 z-50 flex items-center justify-center p-2">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[95vh] flex flex-col shadow-2xl">
            {/* Modal Header with Status Color */}
            <div className={`${getModalHeaderColor(selectedTransaction.status)} text-white p-4 rounded-t-2xl flex-shrink-0`}>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8  bg-opacity-20 rounded-lg flex items-center justify-center">
                    {/* {getStatusIcon(selectedTransaction.status)} */}
                        <img src={TransactionLogo} className="h-6 w-16 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Transaction Details</h2>
                    <p className="text-xs opacity-90">{getStatusText(selectedTransaction.status)}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">₹{selectedTransaction.amount}</p>
                <p className="text-xs opacity-90">{selectedTransaction.date} • {selectedTransaction.time}</p>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Status Message */}
              {selectedTransaction.status === 'failed' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-red-800 text-sm">Transaction Failed</span>
                  </div>
                  <p className="text-xs text-red-700">
                    {selectedTransaction.failureReason || 'The transaction could not be completed.'}
                  </p>
                </div>
              )}

              {selectedTransaction.status === 'in-process' && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-amber-800 text-sm">Processing Transaction</span>
                  </div>
                  <p className="text-xs text-amber-700">
                    Your transaction is being processed. This may take a few minutes.
                  </p>
                </div>
              )}

              {selectedTransaction.status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-700">
                    Your deposit has been processed successfully.
                  </p>
                </div>
              )}

              {/* Transaction Info */}
              <div className="bg-gray-50 rounded-lg  ">
                <h3 className="font-bold text-gray-900 text-sm">Transaction Information</h3>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs">From UPI ID</span>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold bg-white px-2 py-1 rounded text-xs">
                        {selectedTransaction.upiId}
                      </span>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.upiId, 'upiId')}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        {copiedFields.upiId ? (
                          <Check className="w-3 h-3 text-green-500" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs">Transaction ID</span>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold bg-white px-2 py-1 rounded text-xs">
                        {selectedTransaction.transactionId}
                      </span>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.transactionId, 'transactionId')}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        {copiedFields.transactionId ? (
                          <Check className="w-3 h-3 text-green-500" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit Details - Only show for successful transactions */}
              {selectedTransaction.status === 'success' && (
                <>
                
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex-shrink-0">
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all"
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