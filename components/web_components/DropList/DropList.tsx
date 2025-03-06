import { FC, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { DropItem } from './DropItem';

interface Props {
  items: {
    id: string;
    label: string;
  }[];
  onSelect: (id: string) => void;
  children?: ReactNode;
}

const StyledDropList = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: rgba(15, 19, 24, 1);
  border-radius: 4px;
  min-width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropList: FC<Props> = ({ items, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    onSelect(id);
    setActiveItemId(id);
    setIsOpen(false);
  };

  return (
    <StyledDropList>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <DropdownContent>
          {items.map((item) => (
            <DropItem
              key={item.id}
              $isActive={activeItemId === item.id}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </DropItem>
          ))}
        </DropdownContent>
      )}
    </StyledDropList>
  );
};
