import React, { useState, ReactNode, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { DropItem } from '../DropList/DropItem';
import ArrowUpIcon from '../../assets/icons/arrowup2.svg';
import ArrowDownIcon from '../../assets/icons/arrowdown2.svg';

interface Props {
  items: {
    id: string;
    label: string;
  }[];
  valueId: string;
  onSelect: (id: string) => void;
  children?: ReactNode;
}

export const DropList: React.FC<Props> = ({ items, onSelect, valueId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const valueLabel = useMemo(
    () => items.find((item) => item.id === valueId)?.label,
    [valueId]
  );

  const handleItemClick = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsOpen(!isOpen)} style={styles.button}>
        <Text style={styles.button}>{valueLabel}</Text>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Pressable>
      {isOpen && (
        <ScrollView style={styles.dropdownContent} nestedScrollEnabled={true}>
          {items.map((item) => (
            <DropItem
              key={item.id}
              isActive={valueId === item.id}
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
  button: {
    display: 'flex',
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(11, 14, 18, 1)',
  },
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
