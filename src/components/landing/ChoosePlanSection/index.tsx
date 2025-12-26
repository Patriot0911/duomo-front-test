import CircularLoading from '@/components/ui/CircularLoading';

const ChoosePlanSection = () => {
  return (
    <section>
      <CircularLoading
        duration={500}
        autoStart
      />
    </section>
  );
}

export default ChoosePlanSection;
