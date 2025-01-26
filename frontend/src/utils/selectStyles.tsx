export const customSelectStyles = (isDarkMode: boolean) => ({
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
      borderColor: isDarkMode ? '#4B5563' : '#D1D5DB',
      color: isDarkMode ? '#F9FAFB' : '#1F2937',
      padding: '6px',
      boxShadow: state.isFocused
        ? isDarkMode
          ? '0 0 0 2px #3B82F6'
          : '0 0 0 2px #2563EB'
        : 'none',
      borderRadius: '0.75rem',
      width: '100%',
      boxSizing: 'border-box',
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: isDarkMode ? '#1F2937' : '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '8px',
      width: '100%',
      top: 'auto',
      bottom: '100%',
      transform: 'translateY(-8px)',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused
        ? isDarkMode
          ? '#3B82F6'
          : '#DBEAFE'
        : isDarkMode
        ? '#1F2937'
        : '#ffffff',
      color: state.isFocused
        ? isDarkMode
          ? '#ffffff'
          : '#1F2937'
        : isDarkMode
        ? '#F9FAFB'
        : '#1F2937',
      padding: '10px',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      width: '100%',
    }),
    singleValue: (base: any) => ({
      ...base,
      color: isDarkMode ? '#F9FAFB' : '#1F2937',
    }),
    placeholder: (base: any) => ({
      ...base,
      color: isDarkMode ? '#9CA3AF' : '#6B7280',
    }),
  });
  