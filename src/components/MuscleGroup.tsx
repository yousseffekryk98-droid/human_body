import { ReactNode } from 'react';

interface MuscleGroupProps {
  muscleId: string;
  checked: boolean;
  onHover: (id: string | null) => void;
  onClick: (e: React.MouseEvent, id: string) => void;
  children: ReactNode;
}

export const MuscleGroup = ({
  muscleId,
  checked,
  onHover,
  onClick,
  children,
}: MuscleGroupProps) => {
  return (
    <g
      id={muscleId}
      onClick={(e) => onClick(e, muscleId)}
      onMouseEnter={() => onHover(muscleId)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
      className={checked ? 'active' : ''}
    >
      {children}
    </g>
  );
};
