"use client";

import React from "react";

const Page = () => {
  const maliciousContent = `<script>alert('XSS Test');</script>`;
  return (
    <div>
      <h2>Test XSS Component</h2>
      <div dangerouslySetInnerHTML={{ __html: maliciousContent }} />
    </div>
  );
};

export default Page;
