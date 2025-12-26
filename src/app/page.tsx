import { BenefitsSection, CommentsSection, StatisticsSection } from '@/components/landing';
import ChoosePlanSection from '@/components/landing/ChoosePlanSection';

const Home = () => {
  return (
    <>
      <ChoosePlanSection />
      <BenefitsSection />
      <StatisticsSection />
      <CommentsSection />
      <ChoosePlanSection
        id={'choose-plan-bottom-section'}
      />
    </>
  );
}

export default Home;
