import { useMemo, useState } from "react";
import { ROI_DEFAULTS } from "../content";

/**
 * Interactive ROI estimate. Unlike a black-box widget, every input is a visible
 * slider and the underlying assumptions (recovery rate, weeks per year) are
 * stated in the caption, so the number can't be mistaken for a promise.
 */
export function RoiCalculator() {
  const [people, setPeople] = useState<number>(ROI_DEFAULTS.people);
  const [hours, setHours] = useState<number>(ROI_DEFAULTS.hoursPerWeek);
  const [rate, setRate] = useState<number>(ROI_DEFAULTS.hourlyCost);

  const { hoursReturned, annualValue } = useMemo(() => {
    const recoveredWeekly = people * hours * ROI_DEFAULTS.recoveryRate;
    return {
      hoursReturned: Math.round(recoveredWeekly * ROI_DEFAULTS.weeksPerMonth),
      annualValue: Math.round(recoveredWeekly * ROI_DEFAULTS.weeksPerYear * rate),
    };
  }, [people, hours, rate]);

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section className="roi-section" id="results">
      <div className="roi-copy">
        <span>02 / The business case</span>
        <h2>
          See what busywork
          <br />
          is costing you.
        </h2>
        <p>
          Move the sliders. Model the time and operating value a connected
          automation layer can return.
        </p>
        <small>
          Assumes {Math.round(ROI_DEFAULTS.recoveryRate * 100)}% of lost hours are
          recovered. Illustrative estimate — not a guarantee.
        </small>
      </div>

      <div className="roi-calculator">
        <Slider
          id="roi-people"
          label="People doing repeat work"
          value={people}
          min={2}
          max={40}
          onChange={setPeople}
        />
        <Slider
          id="roi-hours"
          label="Hours lost per person / week"
          value={hours}
          min={2}
          max={20}
          onChange={setHours}
        />
        <Slider
          id="roi-rate"
          label="Fully-loaded cost / hour"
          value={rate}
          min={20}
          max={120}
          step={5}
          format={(v) => currency.format(v)}
          onChange={setRate}
        />

        <div className="roi-results" aria-live="polite">
          <div>
            <span>Hours returned / month</span>
            <strong>{hoursReturned.toLocaleString()}</strong>
          </div>
          <div>
            <span>Estimated annual value</span>
            <strong>{currency.format(annualValue)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  format?: (value: number) => string;
  onChange: (value: number) => void;
}

function Slider({ id, label, value, min, max, step = 1, format, onChange }: SliderProps) {
  const display = format ? format(value) : value;
  return (
    <div className="roi-input">
      <label htmlFor={id}>
        {label} <b>{display}</b>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={String(display)}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}
