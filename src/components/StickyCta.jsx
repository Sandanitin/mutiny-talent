import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function StickyCta({ onClick }) {
  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 z-40 btn-primary shadow-xl" aria-label="Work With Us">
      Work With Us
      <ArrowRightIcon className="ml-2 h-5 w-5" />
    </button>
  );
}


