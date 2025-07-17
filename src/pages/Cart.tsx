import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Кожаная сумка Vintage',
      price: 12500,
      image: '/api/placeholder/120/120',
      size: 'M',
      color: 'Коричневый',
      quantity: 1
    },
    {
      id: 2,
      name: 'Ремень Western',
      price: 3500,
      image: '/api/placeholder/120/120',
      size: '95',
      color: 'Черный',
      quantity: 2
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-amber-25">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="ShoppingCart" size={64} className="text-amber-400 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-amber-700 mb-2">Корзина пуста</h2>
            <p className="text-amber-600 mb-4">Добавьте товары из каталога</p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="bg-white border-amber-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-amber-900">{item.name}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline" className="text-amber-700 border-amber-300">
                              Размер: {item.size}
                            </Badge>
                            <Badge variant="outline" className="text-amber-700 border-amber-300">
                              {item.color}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0 border-amber-300 hover:bg-amber-100"
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center font-medium text-amber-900">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0 border-amber-300 hover:bg-amber-100"
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-amber-900">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </div>
                          <div className="text-sm text-amber-600">
                            {item.price.toLocaleString()} ₽ за шт.
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-red-600 hover:text-red-700 border-red-300 hover:bg-red-50"
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white border-amber-200 sticky top-4">
                <CardHeader>
                  <CardTitle className="text-amber-900">Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-amber-700">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                    <span className="text-amber-900">{total.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Доставка</span>
                    <span className="text-amber-900">500 ₽</span>
                  </div>
                  <div className="border-t border-amber-200 pt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span className="text-amber-900">К оплате</span>
                      <span className="text-amber-900">{(total + 500).toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Оформить заказ
                  </Button>
                  <div className="text-center">
                    <Button variant="outline" className="text-amber-700 border-amber-300 hover:bg-amber-100">
                      Продолжить покупки
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;