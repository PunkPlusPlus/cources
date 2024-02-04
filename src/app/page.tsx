import Pricing from '@/components/Pricing';
import { Database } from '@/types_db';

export default async function PricingPage() {
  type Product = Database['public']['Tables']['products']['Row'];
  type Price = Database['public']['Tables']['prices']['Row'];
  interface ProductWithPrices extends Product {
    prices: Price[];
  }

  interface PriceWithProduct extends Price {
    products: Product | null;
  }

  type Subscription = Database['public']['Tables']['subscriptions']['Row'];
  interface SubscriptionWithProduct extends Subscription {
    prices: PriceWithProduct | null;
  }

  const subscription = {
    
  }

  const products: ProductWithPrices[] = [
    {
      active: true,
      description: 'Индивидуальный подбор материалов для обучения и текстовые консультации.',
      id: '12312312',
      image: '',
      metadata: "{}",
      name: 'Эконом',
      prices: [
          {
            active: true,
            currency: 'rub',
            description: 'Mock price',
            id: '21321321',
            interval: 'month',
            interval_count: 1,
            metadata: "{}",
            product_id: '12312312',
            trial_period_days: 1,
            type: 'one_time',
            unit_amount: 100
          }
      ]
    },
    {
      active: true,
      description: 'Индивидуальный подбор материалов для обучения и видеосозвон раз в неделю.',
      id: '12',
      image: '',
      metadata: "{}",
      name: 'Базовый',
      prices: [
          {
            active: true,
            currency: 'RUB',
            description: 'Mock price2',
            id: '21',
            interval: 'month',
            interval_count: 1,
            metadata: "{}",
            product_id: '12',
            trial_period_days: 1,
            type: 'one_time',
            unit_amount: 200
          }
      ]
    },
    {
      active: true,
      description: 'Создание авторских материалов для обучения и еженедельный индивидуальный созвон с преподавателем.',
      id: '121',
      image: '',
      metadata: "{}",
      name: 'Расширенный',
      prices: [
          {
            active: true,
            currency: 'rub',
            description: 'Mock price2',
            id: '21',
            interval: 'year',
            interval_count: 1,
            metadata: "{}",
            product_id: '121',
            trial_period_days: 1,
            type: 'one_time',
            unit_amount: 300
          }
      ]
    }
  ]

  return (
    <Pricing
      //session={session}
      //user={session?.user}
      products={products}
      subscription={null}
    />
  );
}
