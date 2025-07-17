import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  description: string;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Винтажный портфель',
    price: 12900,
    originalPrice: 15900,
    image: '/img/63b6f1e9-2734-468c-befb-34e0078c132e.jpg',
    category: 'Сумки',
    sizes: ['Standard'],
    description: 'Классический кожаный портфель ручной работы из натуральной кожи',
    inStock: true
  },
  {
    id: 2,
    name: 'Кожаный кошелек',
    price: 4900,
    image: '/img/51870f5f-7603-41ea-b237-8332c6d87a5a.jpg',
    category: 'Аксессуары',
    sizes: ['Standard'],
    description: 'Минималистичный кожаный кошелек с ручной прошивкой',
    inStock: true
  },
  {
    id: 3,
    name: 'Классический ремень',
    price: 3900,
    image: '/img/8e03f12b-99b6-41a6-a9ae-5d0d6d51ca9f.jpg',
    category: 'Ремни',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Элегантный кожаный ремень с латунной пряжкой',
    inStock: true
  }
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<{[key: number]: string}>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const addToCart = (product: Product) => {
    const size = selectedSize[product.id] || product.sizes[0];
    const existingItem = cart.find(item => item.product.id === product.id && item.size === size);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1, size }]);
    }
  };

  const removeFromCart = (productId: number, size: string) => {
    setCart(cart.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      setCart(cart.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" className="w-8 h-8 text-orange-800" />
              <h1 className="text-2xl font-bold text-orange-900">American Leather Co.</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-orange-800 hover:text-orange-600 transition-colors">Каталог</a>
              <a href="#about" className="text-orange-800 hover:text-orange-600 transition-colors">О нас</a>
              <a href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors">Контакты</a>
            </nav>
            <Button 
              variant="outline" 
              onClick={() => setIsCartOpen(true)}
              className="relative border-orange-300 text-orange-800 hover:bg-orange-50"
            >
              <Icon name="ShoppingCart" className="w-5 h-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-orange-900 mb-6">
            Винтажная кожа<br />
            <span className="text-orange-700">Американского качества</span>
          </h2>
          <p className="text-xl text-orange-800 mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию кожаных изделий ручной работы, 
            созданных по традициям американских мастеров
          </p>
          <Button 
            size="lg" 
            className="bg-orange-800 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть каталог
            <Icon name="ArrowDown" className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-900 mb-12">
            Наши изделия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-orange-200">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                      {product.category}
                    </Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                        Скидка
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-orange-900 mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-orange-700 mb-4">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-orange-900">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "В наличии" : "Нет в наличии"}
                    </Badge>
                  </div>

                  {product.sizes.length > 1 && (
                    <div className="mb-4">
                      <Label className="text-orange-800 mb-2 block">Размер:</Label>
                      <Select 
                        value={selectedSize[product.id] || product.sizes[0]}
                        onValueChange={(value) => setSelectedSize(prev => ({ ...prev, [product.id]: value }))}
                      >
                        <SelectTrigger className="border-orange-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {product.sizes.map(size => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <Button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-orange-800 hover:bg-orange-700 text-white"
                  >
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-900 mb-6">
                Традиции американского кожевенного дела
              </h2>
              <p className="text-lg text-orange-700 mb-6">
                Уже более 50 лет мы создаем изделия из натуральной кожи, следуя традициям 
                американских мастеров. Каждое изделие изготавливается вручную с особым 
                вниманием к деталям.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-800">100% натуральная кожа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-800">Ручная работа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-800">Пожизненная гарантия</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-orange-900">50+</h3>
                <p className="text-orange-700">Лет опыта</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-orange-900">1000+</h3>
                <p className="text-orange-700">Довольных клиентов</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-orange-900">100%</h3>
                <p className="text-orange-700">Натуральная кожа</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-orange-900">24/7</h3>
                <p className="text-orange-700">Поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-900 mb-12">
            Свяжитесь с нами
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-orange-800">Имя</Label>
                    <Input 
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="border-orange-300 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-orange-800">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="border-orange-300 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-orange-800">Сообщение</Label>
                    <Textarea 
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="border-orange-300 focus:border-orange-500"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-800 hover:bg-orange-700 text-white">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="MapPin" className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-900">Адрес</h3>
                  </div>
                  <p className="text-orange-700">
                    123 Leather Street, Craftsman District<br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="Phone" className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-900">Телефон</h3>
                  </div>
                  <p className="text-orange-700">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="Mail" className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-900">Email</h3>
                  </div>
                  <p className="text-orange-700">info@americanleather.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">American Leather Co.</h3>
              <p className="text-orange-200">
                Качественные кожаные изделия ручной работы с 1970 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#" className="hover:text-white transition-colors">Сумки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремни</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-orange-200">
                +1 (555) 123-4567<br />
                info@americanleather.com
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-orange-800" />
          <div className="text-center text-orange-200">
            <p>&copy; 2024 American Leather Co. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsCartOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-orange-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-orange-900">Корзина</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsCartOpen(false)}>
                  <Icon name="X" className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <p className="text-center text-orange-700 py-8">Корзина пуста</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <Card key={`${item.product.id}-${item.size}`} className="border-orange-200">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-orange-900">{item.product.name}</h4>
                            <p className="text-sm text-orange-700">Размер: {item.size}</p>
                            <p className="text-sm text-orange-700">{item.product.price.toLocaleString()} ₽</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            >
                              <Icon name="Minus" className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            >
                              <Icon name="Plus" className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFromCart(item.product.id, item.size)}
                          >
                            <Icon name="Trash2" className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t border-orange-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-orange-900">Итого:</span>
                  <span className="text-lg font-semibold text-orange-900">
                    {totalPrice.toLocaleString()} ₽
                  </span>
                </div>
                <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white">
                  Оформить заказ
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;