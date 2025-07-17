import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <div className="min-h-screen bg-amber-25">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Контакты</h1>
          <p className="text-amber-700">Свяжитесь с нами для заказа изделий или консультации</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Свяжитесь с нами</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-amber-800">Имя</Label>
                <Input id="name" placeholder="Ваше имя" className="border-amber-300 focus:border-amber-500" />
              </div>
              <div>
                <Label htmlFor="email" className="text-amber-800">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="border-amber-300 focus:border-amber-500" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-amber-800">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="border-amber-300 focus:border-amber-500" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-amber-800">Тема</Label>
                <Input id="subject" placeholder="Тема сообщения" className="border-amber-300 focus:border-amber-500" />
              </div>
              <div>
                <Label htmlFor="message" className="text-amber-800">Сообщение</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем заказе или задайте вопрос..."
                  className="border-amber-300 focus:border-amber-500 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Адрес мастерской
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  г. Москва, ул. Винтажная, д. 12<br />
                  Мастерская кожаных изделий<br />
                  Метро: Арбатская
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Часы работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-amber-700">
                  <p><span className="font-medium">Пн-Пт:</span> 10:00 - 20:00</p>
                  <p><span className="font-medium">Сб:</span> 11:00 - 18:00</p>
                  <p><span className="font-medium">Вс:</span> выходной</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-amber-600" />
                  <a href="tel:+7(495)123-45-67" className="text-amber-700 hover:text-amber-900">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-amber-600" />
                  <a href="mailto:info@vintage-leather.ru" className="text-amber-700 hover:text-amber-900">
                    info@vintage-leather.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={16} className="text-amber-600" />
                  <a href="https://t.me/vintage_leather" className="text-amber-700 hover:text-amber-900">
                    @vintage_leather
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon name="Info" size={20} className="mr-2" />
                  Индивидуальные заказы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 mb-3">
                  Изготавливаем изделия по индивидуальным эскизам и размерам.
                </p>
                <div className="space-y-2 text-sm text-amber-600">
                  <p>• Гравировка и тиснение</p>
                  <p>• Выбор цвета и типа кожи</p>
                  <p>• Персонализация под ваш стиль</p>
                  <p>• Сроки изготовления: 7-14 дней</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;