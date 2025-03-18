import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // This lifecycle method is called when an error is thrown in a child component
  static getDerivedStateFromError(error) {
    // Update state to display the fallback UI
    return { hasError: true };
  }

  // This method is called after the error is caught
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by Error Boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render the fallback UI if there is an error
      return (
        <div>
          <h1>Something went wrong. Please try again later.</h1>
        </div>
      );
    }
    // Render the children if there is no error
    return this.props.children;
  }
}

export default ErrorBoundary;
