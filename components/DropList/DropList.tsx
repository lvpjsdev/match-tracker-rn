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
import { ComponentStyles } from './styles';
import { useMediaQuery } from 'react-responsive';
import { SMALL_SCREEN_MEDIA_QUERY } from '@/constants';

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
  const isSmallScreen = useMediaQuery({ query: SMALL_SCREEN_MEDIA_QUERY });
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
    <View
      style={[styles.container, isSmallScreen && smallScreenStyles.container]}
    >
      <Pressable onPress={() => setIsOpen(!isOpen)} style={[styles.button]}>
        <Text style={styles.buttonText}>{valueLabel}</Text>
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
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    display: 'flex',
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: 'rgba(11, 14, 18, 1)',
    justifyContent: 'space-between',
  },
  container: {
    position: 'relative',
    display: 'flex',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'rgba(15, 19, 24, 1)',
    borderRadius: 4,
    minWidth: '100%',
    maxHeight: 200,
  },
});

const smallScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
