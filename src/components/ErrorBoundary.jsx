import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B1120] text-white p-6 font-sans">
          <div className="glass-card p-8 rounded-3xl border border-white/5 text-center max-w-md space-y-4 shadow-2xl">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mx-auto border border-red-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold font-sora">Unexpected Error</h2>
            <p className="text-sm font-light text-slate-400">
              The application encountered a rendering issue. Please try reloading the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
