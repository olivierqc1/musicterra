import React from 'react';
import './SearchHistory.css';

interface SearchHistoryProps {
  history: string[];
  onSelectTerm: (term: string) => void;
  title: string;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onSelectTerm,
  title
}) => {
  if (!history.length) return null;

  return (
    <div className="search-history-container">
      <h3>{title}</h3>
      <div className="search-history-tags">
        {history.map((term, index) => (
          <span
            key={`history-${index}`}
            className="search-history-tag"
            onClick={() => onSelectTerm(term)}
          >
            {term}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
