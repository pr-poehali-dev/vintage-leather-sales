import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: 'Кожаная сумка Vintage',
      price: 12500,
      image: '/api/placeholder/300/300',
      category: 'Сумки'
    },
    {
      id: 2,
      name: 'Ремень Western',
      price: 3500,
      image: '/api/placeholder/300/300',
      category: 'Ремни'
    },
    {
      id: 3,
      name: 'Портмоне Classic',
      price: 4500,
      image: '/api/placeholder/300/300',
      category: 'Аксессуары'
    },
  ];

  const leatherTextures = [
    {
      id: 1,
      name: 'Натуральная кожа',
      description: 'Классическая выделка, мягкая фактура',
      image: '/api/placeholder/200/200'
    },
    {
      id: 2,
      name: 'Винтажная кожа',
      description: 'Состаренная поверхность с патиной',
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: 'Нубук',
      description: 'Бархатистая поверхность, износостойкость',
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      name: 'Замша',
      description: 'Мягкая ворсистая текстура',
      image: '/api/placeholder/200/200'
    },
  ];

  return (
    <div className="min-h-screen bg-amber-25">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            VINTAGE LEATHER
          </h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Подлинные кожаные изделия в американском винтажном стиле. 
            Каждое изделие создано вручную с душой и мастерством.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg">
                <Icon name="Package" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-amber-700 text-amber-700 hover:bg-amber-100 px-8 py-4 text-lg"
              onClick={() => document.getElementById('texture-gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Image" size={20} className="mr-2" />
              Галерея фактур
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Популярные изделия</h2>
            <p className="text-amber-700 text-lg">Лучшие образцы американского кожевенного искусства</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-amber-200">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-amber-900 mb-2">{product.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-900">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Link to="/catalog">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Gallery */}
      <section id="texture-gallery" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Галерея фактур кожи</h2>
            <p className="text-amber-700 text-lg">Изучите детали и текстуры наших материалов</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leatherTextures.map((texture) => (
              <Card 
                key={texture.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-amber-200"
                onClick={() => setSelectedImage(texture.image)}
              >
                <CardContent className="p-4">
                  <img 
                    src={texture.image} 
                    alt={texture.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-amber-900 mb-1">{texture.name}</h3>
                  <p className="text-sm text-amber-600">{texture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Традиции американского кожевенного дела
              </h2>
              <p className="text-lg text-amber-700 mb-6">
                Уже более 50 лет мы создаем изделия из натуральной кожи, следуя традициям 
                американских мастеров. Каждое изделие изготавливается вручную с особым 
                вниманием к деталям и качеству.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-amber-600" />
                  <span className="text-amber-800">100% натуральная кожа высшего качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-amber-600" />
                  <span className="text-amber-800">Ручная работа мастеров</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-amber-600" />
                  <span className="text-amber-800">Уникальный винтажный стиль</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-amber-600" />
                  <span className="text-amber-800">Долговечность и износостойкость</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-900">50+</h3>
                <p className="text-amber-700">Лет опыта</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-900">5000+</h3>
                <p className="text-amber-700">Довольных клиентов</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-900">100%</h3>
                <p className="text-amber-700">Натуральная кожа</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-900">∞</h3>
                <p className="text-amber-700">Пожизненная гарантия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы стать обладателем уникального изделия?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Посетите наш каталог и найдите идеальное кожаное изделие, 
            которое будет служить вам долгие годы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-4 text-lg">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-amber-800 px-8 py-4 text-lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Детальное фото фактуры кожи"
              className="max-w-full max-h-full object-contain"
            />
            <Button 
              variant="outline" 
              className="absolute top-4 right-4 bg-white text-black hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;