interface Muscle {
  id: string;
  name: string;
}

export const MUSCLE_GROUPS: Record<string, Muscle[]> = {
  Arms: [
    { id: 'biceps-left', name: 'Biceps (Left)' },
    { id: 'biceps-right', name: 'Biceps (Right)' },
    { id: 'deltoids-left', name: 'Deltoids (Left)' },
    { id: 'deltoids-right', name: 'Deltoids (Right)' },
    { id: 'forearms-left', name: 'Forearms (Left)' },
    { id: 'forearms-right', name: 'Forearms (Right)' },
    { id: 'triceps-left', name: 'Triceps (Left)' },
    { id: 'triceps-right', name: 'Triceps (Right)' },
  ],
  Back: [
    { id: 'trapezius', name: 'Trapezius' },
    { id: 'lats-left', name: 'Lats (Left)' },
    { id: 'lats-right', name: 'Lats (Right)' },
  ],
  Core: [
    { id: 'abs', name: 'Abs' },
    { id: 'obliques-left', name: 'Obliques (Left)' },
    { id: 'obliques-right', name: 'Obliques (Right)' },
    { id: 'pectorals-left', name: 'Chest (Left)' },
    { id: 'pectorals-right', name: 'Chest (Right)' },
  ],
  Legs: [
    { id: 'adductors-left', name: 'Adductors (Left)' },
    { id: 'adductors-right', name: 'Adductors (Right)' },
    { id: 'calves-left', name: 'Calves (Left)' },
    { id: 'calves-right', name: 'Calves (Right)' },
    { id: 'hamstrings-left', name: 'Hamstrings (Left)' },
    { id: 'hamstrings-right', name: 'Hamstrings (Right)' },
    { id: 'glutes-left', name: 'Glutes (Left)' },
    { id: 'glutes-right', name: 'Glutes (Right)' },
    { id: 'quads-left', name: 'Quads (Left)' },
    { id: 'quads-right', name: 'Quads (Right)' },
  ],
};
