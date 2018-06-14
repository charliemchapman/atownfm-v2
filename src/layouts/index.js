import React from "react";
import SEO from '../components/SEO';
import Header from '../components/Header';

export default ({ children }) => {
  return (
    <div>
      <SEO/>
      <Header /> 
      {children()}
    </div>
)};