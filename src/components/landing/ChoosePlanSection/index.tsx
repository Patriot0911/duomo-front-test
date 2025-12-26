import type { ISectionProps } from '@/types/landing/sections';
import PlanSelection from './components/PlanSelection';

import styles from './styles.module.scss';

const subscriptionUrl = 'https://awesomeapp.com/subscription';
const subscriptionContactEmail = 'support@awesomeapp.com';

const ChoosePlanSection = ({ id, children }: ISectionProps) => {
  return (
    <section id={id ?? 'choose-plan-section'} className={styles['choose-plan-section']}>
      <h2 className={styles['section-heading']}>Choose your plan</h2>
      <PlanSelection />
      {children}
      <p className={styles['subscription-prescription']}>
        You are enrolling in a 3-monthly subscription to
        <a href={subscriptionUrl}> {subscriptionUrl} </a> with the discount price
        $29.99.You agree that the plan you selected will automatically be
        extended at the full price for successive renewal periods and you will be
        charged $99.99 every 3 months until you cancel the subscription.
        Payments will be charged from the card you specified here. You can
        cancel your subscription by contacting our customer support team via
        email at {subscriptionContactEmail} Subscription Policy. The charge will
        appear on your bill as "awesomeapp"
      </p>
    </section>
  );
}

export default ChoosePlanSection;
