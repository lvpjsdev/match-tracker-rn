import React, { useState, ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { DropItem } from '../DropList/DropItem';

interface Props {
  items: {
    id: string;
    label: string;
  }[];
  onSelect: (id: string) => void;
  children?: ReactNode;
}

export const DropList: React.FC<Props> = ({ items, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    onSelect(id);
    setActiveItemId(id);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        {children}
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.dropdownContent} nestedScrollEnabled={true}>
          {items.map((item) => (
            <DropItem
              key={item.id}
              isActive={activeItemId === item.id}
              onPress={() => handleItemClick(item.id)}
            >
              {item.label}
            </DropItem>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 1,
    backgroundColor: 'rgba(15, 19, 24, 1)',
    borderRadius: 4,
    minWidth: '100%',
    maxHeight: 200,
  },
});
