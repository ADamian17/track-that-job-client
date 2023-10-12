import styles from "./Indicators.module.scss";

type IndicatorsType = {
  steps: any[]
  currentStep: number
}

const Indicators: React.FC<IndicatorsType> = ({ steps, currentStep }) => (
  <div className={styles.indicatorsWrapper}>
    {
      steps && steps.map((_, idx) => (
        <div
          key={Date.now() + `-${idx}`}
          className={`${styles.indicators} ${currentStep === idx && styles.active}`}
        />
      ))
    }
  </div>
)

export default Indicators;

