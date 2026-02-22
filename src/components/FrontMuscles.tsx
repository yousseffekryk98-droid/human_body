import { MuscleGroup } from './MuscleGroup';

interface FrontMusclesProps {
  checked: Record<string, boolean>;
  onHover: (id: string | null) => void;
  onClick: (e: React.MouseEvent, id: string) => void;
}

export const FrontMuscles = ({ checked, onHover, onClick }: FrontMusclesProps) => {
  return (
    <g id="Front-Muscles">
      <MuscleGroup
        muscleId="DeltoidLeft"
        checked={checked['deltoids-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M35.684,38.139c0,0 -12.432,-7.085 -17.512,3.476c-1.869,3.885 -0.459,16.146 -0.401,16.71c0.038,0.373 3.69,-7.88 6.817,-9.625c0.537,-0.299 -0.144,-8.31 11.096,-10.561Z"
          style={{ fill: '#333' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="DeltoidRight"
        checked={checked['deltoids-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M52.463,38.139c0,0 12.432,-7.085 17.512,3.476c1.869,3.885 0.459,16.146 0.401,16.71c-0.038,0.373 -3.69,-7.88 -6.818,-9.625c-0.536,-0.299 0.145,-8.31 -11.095,-10.561Z"
          style={{ fill: '#333' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="BicepsLeft"
        checked={checked['biceps-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M25.232,48.934c0,0 1.105,16.785 -0.186,17.535c-1.481,0.86 -2.239,9.14 -2.239,9.14c0,0 -0.746,-2.099 -1.585,-2.005c-0.84,0.093 -2.425,1.679 -2.752,2.238c-0.326,0.56 -5.223,-17.301 6.762,-26.908Z"
          style={{ fill: '#404040' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="BicepsRight"
        checked={checked['biceps-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M63.528,51.098c0,0 -1.105,16.784 0.187,17.534c1.481,0.861 2.238,9.141 2.238,9.141c0,0 0.746,-2.099 1.586,-2.005c0.839,0.093 2.425,1.678 2.751,2.238c0.327,0.56 5.223,-17.302 -6.762,-26.908Z"
          style={{ fill: '#404040' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="PectoralsLeft"
        checked={checked['pectorals-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M42.057,40.112c-0.311,3.984 2.007,8.955 2.037,11.938c0.04,4.039 -0.33,7.303 -7.463,8.098c-5.733,0.638 -7.022,-1.737 -8.88,-2.919c-1.159,-0.738 -1.515,-8.373 -2.573,-9.527c-0.723,-0.788 3.991,-8.909 10.523,-8.851c6.532,0.057 6.421,0.425 6.356,1.261Z"
          style={{ fill: '#595959' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="PectoralsRight"
        checked={checked['pectorals-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M46.136,40.112c0.311,3.984 -2.008,8.955 -2.037,11.938c-0.04,4.039 0.329,7.303 7.463,8.098c5.733,0.638 7.022,-1.737 8.879,-2.919c1.16,-0.738 1.515,-8.373 2.574,-9.527c0.723,-0.788 -3.991,-8.909 -10.523,-8.851c-6.533,0.057 -6.422,0.425 -6.356,1.261Z"
          style={{ fill: '#595959' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="ObliquesLeft"
        checked={checked['obliques-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M36.007,62.836c0,0 1.395,31.809 0,32.945c-1.394,1.136 -1.678,-6.343 -6.79,-7.195c-0.953,-0.159 -0.163,-17.23 -2.449,-21.3c-2.285,-4.071 8.267,-5.775 9.239,-4.45Z"
          style={{ fill: '#262626' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="ObliquesRight"
        checked={checked['obliques-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M51.917,62.836c0,0 -1.395,31.809 0,32.945c1.394,1.136 1.678,-6.343 6.79,-7.195c0.953,-0.159 0.163,-17.23 2.449,-21.3c2.285,-4.071 -8.267,-5.775 -9.239,-4.45Z"
          style={{ fill: '#262626' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="Abs"
        checked={checked['abs']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M44.343,60.277c0,0 -5.885,-1.868 -8.56,1.474c-2.675,3.341 0.465,16.298 -0.248,21.113c-0.713,4.815 3.292,24.8 5.331,25.563c1.267,0.475 2.143,0.569 3.567,-0.089c1.256,-0.58 7.126,-13.883 7.896,-25.594c0.356,-5.416 4.855,-21.729 -2.992,-22.913c-4.539,-0.685 -4.994,0.446 -4.994,0.446Z"
          style={{ fill: '#595959' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="QuadsLeft"
        checked={checked['quads-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M31.536,95.898c0,0 11.073,23.633 10.268,34.698c-0.805,11.065 -2.012,14.887 -2.012,17.704c0,2.816 0.361,-4.209 -3.165,-4.225c-4.132,-0.019 -7.219,3.332 -8.338,7.023c-0.159,0.527 -0.999,-10.497 -0.999,-10.497c0,0 -1.416,-3.038 -2.386,-13.241c-1.468,-15.448 10.299,-21.015 6.632,-31.462"
          style={{ fill: '#333' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="QuadsRight"
        checked={checked['quads-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M56.329,95.898c0,0 -11.073,23.633 -10.268,34.698c0.804,11.065 2.012,14.887 2.012,17.704c0,2.816 -0.361,-4.209 3.165,-4.225c4.131,-0.019 7.219,3.332 8.337,7.023c0.16,0.527 0.999,-10.497 0.999,-10.497c0,0 1.417,-3.038 2.387,-13.241c1.468,-15.448 -10.299,-21.015 -6.632,-31.462"
          style={{ fill: '#333' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="AdductorsLeft"
        checked={checked['adductors-left']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M34.684,93.947c0,0 4.231,11.716 5.884,14.86c2.454,4.668 3.854,8.447 3.487,9.049c-0.368,0.602 -1.254,9.8 -1.32,8.966c-0.474,-6.017 -7.45,-29.324 -8.592,-30.924c-0.63,-0.882 0.537,-1.957 0.541,-1.951Z"
          style={{ fill: '#4d4d4d' }}
        />
      </MuscleGroup>

      <MuscleGroup
        muscleId="AdductorsRight"
        checked={checked['adductors-right']}
        onHover={onHover}
        onClick={onClick}
      >
        <path
          d="M53.036,93.947c0,0 -4.231,11.716 -5.884,14.86c-2.454,4.668 -3.854,8.447 -3.487,9.049c0.368,0.602 1.254,9.8 1.32,8.966c0.474,-6.017 7.45,-29.324 8.592,-30.924c0.63,-0.882 -0.537,-1.957 -0.541,-1.951Z"
          style={{ fill: '#4d4d4d' }}
        />
      </MuscleGroup>
    </g>
  );
};
