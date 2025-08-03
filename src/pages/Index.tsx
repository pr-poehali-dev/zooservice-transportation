import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Truck",
      title: "Наземная перевозка",
      description: "Комфортабельные автомобили с климат-контролем и системами безопасности для поездок по России",
      features: ["Климат-контроль", "GPS-мониторинг", "Ветеринарное сопровождение"]
    },
    {
      icon: "Plane",
      title: "Авиаперевозки",
      description: "Быстрая и безопасная транспортировка животных на дальние расстояния по всему миру",
      features: ["IATA стандарты", "Документооборот", "Карго-сопровождение"]
    },
    {
      icon: "Shield",
      title: "Премиум безопасность",
      description: "Максимальный уровень комфорта и безопасности для особо ценных питомцев",
      features: ["Индивидуальный подход", "Страхование", "24/7 поддержка"]
    }
  ];

  const tariffs = [
    {
      title: "Стандарт",
      price: "от 2 500 ₽",
      distance: "до 500 км",
      features: ["Базовая переноска", "GPS-трекинг", "Страховка 50 000 ₽", "Фото-отчеты"]
    },
    {
      title: "Комфорт",
      price: "от 4 500 ₽", 
      distance: "до 1000 км",
      features: ["Улучшенная переноска", "Климат-контроль", "Страховка 150 000 ₽", "Видео-отчеты", "Ветеринар на связи"],
      popular: true
    },
    {
      title: "Премиум",
      price: "от 8 500 ₽",
      distance: "свыше 1000 км",
      features: ["VIP переноска", "Индивидуальный транспорт", "Страховка 500 000 ₽", "Онлайн трансляция", "Персональный ветеринар", "Питание в дороге"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Зоокилометры</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#tariffs" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Заказать перевозку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Безопасная перевозка<br />ваших питомцев
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональная транспортировка животных на любые расстояния с максимальным 
                комфортом и заботой о здоровье ваших любимцев
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/8cc5c3ad-16f0-4946-9eba-44532dd03dab.jpg" 
                alt="Счастливые питомцы в транспортировочном контейнере"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по транспортировке животных с соблюдением всех 
              международных стандартов безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Выберите подходящий тариф 
              для вашего питомца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tariff.price}</div>
                  <CardDescription>{tariff.distance}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tariff.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">О компании</h3>
              <p className="text-lg text-gray-600 mb-6">
                Зоокилометры — ведущая компания по перевозке животных в России с опытом работы более 8 лет. 
                Мы обеспечиваем безопасную и комфортную транспортировку ваших питомцев на любые расстояния.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-gray-600">Перевезено животных</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.8%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600">Поддержка клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-gray-600">Городов России</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="/img/774c85a0-6b43-47a7-b476-66f376eabe01.jpg" 
                alt="Профессиональная перевозка животных с современным оборудованием"
                className="rounded-2xl shadow-lg w-full mb-6"
              />
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Shield" size={32} className="text-green-500" />
                  <div>
                    <h4 className="font-semibold">Безопасность превыше всего</h4>
                    <p className="text-gray-600">Современное оборудование и опытные специалисты</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Heart" size={32} className="text-red-500" />
                  <div>
                    <h4 className="font-semibold">Забота и внимание</h4>
                    <p className="text-gray-600">Индивидуальный подход к каждому питомцу</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={32} className="text-blue-500" />
                  <div>
                    <h4 className="font-semibold">Точность в сроках</h4>
                    <p className="text-gray-600">Доставка в указанное время без задержек</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-gray-600">+7 (800) 555-35-35</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@zookilometry.ru</p>
              <p className="text-gray-600">support@zookilometry.ru</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Офис</h4>
              <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
              <p className="text-gray-600">Работаем круглосуточно</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="text-xl font-bold">Зоокилометры</span>
              </div>
              <p className="text-gray-400">
                Надежная транспортировка ваших питомцев с 2016 года
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Наземные перевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Авиаперевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Международные перевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экстренная помощь</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@zookilometry.ru</p>
                <p>г. Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Зоокилометры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}