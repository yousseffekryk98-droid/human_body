import { useState } from 'react';
import '../styles/MuscleGroupSelector.css';
import { MUSCLE_GROUPS } from '../data/muscleGroups';
import { BackMuscles } from './BackMuscles';
import { FrontMuscles } from './FrontMuscles';

interface MuscleState {
  [key: string]: boolean;
}

// Map SVG element IDs to muscle data IDs
const svgIdToMuscleId: Record<string, string> = {
  Trapezius: 'trapezius',
  LatsLeft: 'lats-left',
  LatsRight: 'lats-right',
  TricepsLeft: 'triceps-left',
  TricepsRight: 'triceps-right',
  ForearmsLeft: 'forearms-left',
  ForearmsRight: 'forearms-right',
  GlutesLeft: 'glutes-left',
  GlutesRight: 'glutes-right',
  HamstringsLeft: 'hamstrings-left',
  HamstringsRight: 'hamstrings-right',
  CalvesLeft: 'calves-left',
  CalvesRight: 'calves-right',
  DeltoidLeft: 'deltoids-left',
  DeltoidRight: 'deltoids-right',
  BicepsLeft: 'biceps-left',
  BicepsRight: 'biceps-right',
  PectoralsLeft: 'pectorals-left',
  PectoralsRight: 'pectorals-right',
  ObliquesLeft: 'obliques-left',
  ObliquesRight: 'obliques-right',
  Abs: 'abs',
  QuadsLeft: 'quads-left',
  QuadsRight: 'quads-right',
  AdductorsLeft: 'adductors-left',
  AdductorsRight: 'adductors-right',
};

export const MuscleGroupSelector = () => {
  const [checked, setChecked] = useState<MuscleState>({});
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const handleCheckboxChange = (muscleId: string) => {
    setChecked((prev) => ({
      ...prev,
      [muscleId]: !prev[muscleId],
    }));
  };

  const handleLabelHover = (muscleId: string) => {
    setHoveredLabel(muscleId);
  };

  const handleLabelLeave = () => {
    setHoveredLabel(null);
  };

  const handleSvgGroupClick = (e: React.MouseEvent, svgId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const muscleId = svgIdToMuscleId[svgId];
    if (muscleId) {
      handleCheckboxChange(muscleId);
    }
  };

  const handleSvgGroupHover = (svgId: string | null) => {
    if (!svgId) {
      setHoveredLabel(null);
      return;
    }
    const muscleId = svgIdToMuscleId[svgId];
    if (muscleId) {
      setHoveredLabel(muscleId);
    }
  };

  return (
    <div className="muscle-groups">
      <h1>Muscle Group Selector</h1>

      {Object.entries(MUSCLE_GROUPS).map(([category, muscles]) => (
        <div key={category}>
          <h2>{category}</h2>
          {muscles.map((muscle) => (
            <div key={muscle.id}>
              <input
                type="checkbox"
                className={`muscles-helper ${muscle.id}`}
                id={muscle.id}
                checked={checked[muscle.id] || false}
                onChange={() => handleCheckboxChange(muscle.id)}
              />
              <label
                htmlFor={muscle.id}
                className={hoveredLabel === muscle.id ? 'hover' : ''}
                onMouseEnter={() => handleLabelHover(muscle.id)}
                onMouseLeave={handleLabelLeave}
              >
                {muscle.name}
              </label>
            </div>
          ))}
        </div>
      ))}

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 176 207"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 1.41421,
        }}
      >
        <rect id="Artboard1" x="0" y="0" width="175.551" height="206.785" style={{ fill: 'none' }} />
        <BackMuscles checked={checked} onHover={handleSvgGroupHover} onClick={handleSvgGroupClick} />
        <FrontMuscles checked={checked} onHover={handleSvgGroupHover} onClick={handleSvgGroupClick} />
      </svg>
    </div>
  );
};
