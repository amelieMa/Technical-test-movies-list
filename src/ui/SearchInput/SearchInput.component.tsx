import { Input } from 'antd';

import { SearchInputWrapper } from './SearchInput.wrapper';

const { Search } = Input;

interface SearchInputProps {
  placeholder: string,
  onSearch: (value: string) => void,
  value: string | null,
}

export const SearchInput = ({ placeholder, onSearch, value }: SearchInputProps) => (
  <SearchInputWrapper>
    <Search 
      placeholder={placeholder}
      onSearch={onSearch}
      allowClear={true}
      defaultValue={value || ''}
    />
  </SearchInputWrapper>
);
