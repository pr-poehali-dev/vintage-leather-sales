import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Кожаная сумка Vintage',
      category: 'Сумки',
      price: 12500,
      image: '/api/placeholder/300/300',
      sizes: ['S', 'M', 'L'],
      material: 'Натуральная кожа',
      color: 'Коричневый'
    },
    {
      id: 2,
      name: 'Ремень Western',
      category: 'Ремни',
      price: 3500,
      image: '/api/placeholder/300/300',
      sizes: ['85', '90', '95', '100', '105'],
      material: 'Нубук',
      color: 'Черный'
    },
    {
      id: 3,
      name: 'Портмоне Classic',
      category: 'Аксессуары',
      price: 4500,
      image: '/api/placeholder/300/300',
      sizes: ['ONE SIZE'],
      material: 'Замша',
      color: 'Бордовый'
    },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-amber-25">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Каталог изделий</h1>
          <p className="text-amber-700">Подлинные кожаные изделия в американском винтажном стиле</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center bg-white p-4 rounded-lg border border-amber-200">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-amber-300 focus:border-amber-500"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px] border-amber-300 focus:border-amber-500">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="Сумки">Сумки</SelectItem>
              <SelectItem value="Ремни">Ремни</SelectItem>
              <SelectItem value="Аксессуары">Аксессуары</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Size Guide */}
        <div className="mb-8 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h2 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
            <Icon name="Ruler" size={20} className="mr-2" />
            Размерные сетки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Сумки</h3>
              <div className="text-sm text-amber-700">
                <p>S: 25x20x8 см</p>
                <p>M: 30x25x10 см</p>
                <p>L: 35x30x12 см</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Ремни</h3>
              <div className="text-sm text-amber-700">
                <p>85-105 см: длина в см</p>
                <p>Ширина: 3.5 см</p>
                <p>Толщина: 4 мм</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Аксессуары</h3>
              <div className="text-sm text-amber-700">
                <p>Портмоне: 11x9x2 см</p>
                <p>Кошелек: 19x10x3 см</p>
                <p>Ключница: 11x7x2 см</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg text-amber-900 mb-2">{product.name}</CardTitle>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    {product.category}
                  </Badge>
                  <div className="text-sm text-amber-600">
                    <p><span className="font-medium">Материал:</span> {product.material}</p>
                    <p><span className="font-medium">Цвет:</span> {product.color}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-900">
                  {product.price.toLocaleString()} ₽
                </span>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-amber-400 mb-4 mx-auto" />
            <p className="text-amber-600">Товары не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;