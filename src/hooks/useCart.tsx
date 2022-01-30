import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FoodListItemProps } from '../components/FoodList/FoodList';

type CartContextProps = {
  items: FoodListItemProps[];
  addItem: (item: FoodListItemProps) => void;
  removeItem: (item: FoodListItemProps) => void;
  total: number;
};

const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  total: 0,
});

const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<FoodListItemProps[]>([]);
  const [total, setTotal] = useState(0);

  const addItem = useCallback(
    (item: FoodListItemProps) => {
      console.log('add');

      const itemIndex = items.findIndex((i) => i.id === item.id);

      if (itemIndex === -1) {
        if (!item.quantity) {
          item.quantity = 1;
        }

        setItems([...items, item]);
        return;
      }

      items[itemIndex] = {
        ...item,
        // @ts-ignore
        quantity: items[itemIndex].quantity + 1,
      };

      return setItems([...items]);
    },
    [items]
  );

  const removeItem = useCallback(
    (item: FoodListItemProps) => {
      const index = items.findIndex((i) => i.id === item.id);

      if (index === -1) return;

      // @ts-ignore
      if (items[index].quantity - 1 === 0) {
        items.splice(index, 1);
        return setItems([...items]);
      }

      items[index] = {
        ...item,
        // @ts-ignore
        quantity: items[index].quantity - 1,
      };

      return setItems([...items]);
    },
    [items]
  );

  useEffect(() => {
    setTotal(
      items.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0)
    );
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export default useCart;
export { CartProvider };
