import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/catalog', label: 'Каталог', icon: 'Package' },
    { path: '/cart', label: 'Корзина', icon: 'ShoppingCart' },
    { path: '/contact', label: 'Контакты', icon: 'Phone' },
  ];

  return (
    <nav className="bg-amber-50 border-b border-amber-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-amber-900">
          VINTAGE LEATHER
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-amber-200 text-amber-900"
                  : "text-amber-700 hover:bg-amber-100"
              )}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;